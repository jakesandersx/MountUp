import express, { Request, Response, NextFunction, Router } from "express";
import { addFollowing, getFollowedTeams, getUserByEmail, insertNewUser, unfollowTeam } from "../mongo/user";
import { MongoInsertError } from "../errors/mongo";
import { BadRequestError, UnauthorizedError } from "../errors/user";
import { Me } from "../models/me";
import * as bcrypt from "bcrypt";
import { isLoggedIn } from "../middleware/auth";
import { ensureObjectId } from "../utils/mongohelper";

const router: Router = express.Router();

router.post("/register", async (req: Request, res: Response, next: NextFunction) => {
    let email = req.body.email;
    let password = req.body.password;
    let verifyPassword = req.body.verifyPassword;
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let checked = req.body.checked;
    let studentId = req.body.checked;

    try {
        if (email && email.length > 0) {
          if (password && password.length > 0 && password === verifyPassword) {
            let newUser = await insertNewUser(firstName, lastName, email, password, checked, studentId);
            if (newUser) {
              let me = new Me();
              me.isAdmin = true;
              me.email = email;
              me._id = newUser._id;
              req.session.Me = me;
              res.json(me);
            } else {
              throw new MongoInsertError("Something went wrong when creating your user account");
            }
          } else {
            throw new BadRequestError("You need to send a valid password");
          }
        } else {
          throw new BadRequestError("You need to send a valid username");
        }
    } catch (err) {
      next(err);
    }
  }
);

router.post("/login", async (req: Request, res: Response, next: NextFunction) => {
  let email = req.body.email;
  let password = req.body.password;

  try{
    if (email && email.length > 0) {
      if (password && password.length > 0) {
        let user = await getUserByEmail(email);
        if (user) {
          bcrypt.compare(password, user.password, (err, result) => {
            try{
              if (err) {
                throw new BadRequestError("Your email/password is incorrect");
              }
              if (result && user) {
                let me = new Me();
                me.isAdmin = true;
                me.email = email;
                me._id = user._id;
                req.session.Me = me;
                res.json(me);
              } else {
                throw new BadRequestError("Your email/password is incorrect");
              }
            } catch(err){
              next(err);
            }
          });
        } else {
          throw new BadRequestError("Your email/password is incorrect");
        }
      } else {
        throw new BadRequestError("You need to send a valid password");
      }
    } else {
      throw new BadRequestError("You need to send a valid email")
    }
  } catch(err){
    next(err);
  }
  
});

router.get("/logout", isLoggedIn, async (req: Request, res: Response, next: NextFunction) => {
  req.session.destroy(() => {
      res.json("You've been logged out");
    });
});

router.post("/follow", isLoggedIn, async(req: Request, res: Response, next: NextFunction) => {
  const email = req.session.Me?.email;
  const sport = req.body.sport;
  const teamId = req.body.teamId;

  try{
    if(email){
      if(teamId){
        const result = await addFollowing(email, ensureObjectId(teamId));

        res.json(result);
      } else{
        throw new BadRequestError("You must enter a valid team id");
      }
    } else{
      throw new UnauthorizedError("You must be logged in to follow a team");
    }
  } catch(err){
    next(err);
  }
});

router.get("/following", isLoggedIn, async(req: Request, res: Response, next: NextFunction) => {
  const email = req.session.Me?.email;

  try{
    if(email){
      const result = await getFollowedTeams(email);

      res.json(result);
    } else{
      throw new UnauthorizedError("You must be logged in to see the teams you're following");
    }
  } catch(err){
    next(err);
  }
})

router.delete("/unfollow", isLoggedIn, async(req: Request, res: Response, next: NextFunction) => {
  const email = req.session.Me?.email;
  const teamId = req.body.teamId;

  try{
    if(email){
      const result = await unfollowTeam(email, teamId);

      res.json(result);
    } else{
      throw new UnauthorizedError("You must be logged in to unfollow");
    }
  } catch(err){
    next(err);
  }
})

export default router;

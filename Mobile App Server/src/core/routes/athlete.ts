import express, { Request, Response, NextFunction, Router } from "express";
import { MongoInsertError } from "../errors/mongo";
import { BadRequestError } from "../errors/user";
import { isLoggedIn } from "../middleware/auth";
import { ensureObjectId } from "../utils/mongohelper";
import { insertNewAthlete } from "../mongo/athlete";

const router: Router = express.Router();

router.post(
    "/create",
    isLoggedIn,
    async (req: Request, res: Response, next: NextFunction) => {
      let name = req.body.name;
      let position = req.body.position;
      let grade = req.body.grade;
      let from = req.body.from;
      let number = req.body.number;
  
      delete req.body.name;
      delete req.body.position;
      delete req.body.grade;
      delete req.body.from;
      delete req.body.number;
  
      let stats = req.body;
  
      try{
        if (name && name.length > 0) {
            let newTeam = await insertNewAthlete(name, number, position, grade, from, stats);
            if (newTeam) {
              res.json(newTeam);
            } else {
              throw new MongoInsertError("There was an error creating the new athlete");
            }
          } else {
            throw new BadRequestError("You need to send a valid name");
          }
        } 
      catch(err){
        next(err);
      }
    }
  );

  export default router;
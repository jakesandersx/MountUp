import express, { Request, Response, NextFunction, Router } from "express";
import { MongoInsertError } from "../errors/mongo";
import { BadRequestError, UnauthorizedError } from "../errors/user";
import { getTeamsBySport, insertNewTeam, updateTeam } from "../mongo/teams";
import { ensureObjectId } from "../utils/mongohelper";

const router: Router = express.Router();

router.post("/create", async (req: Request, res: Response, next: NextFunction) => {
    let school = req.body.school;
    let sport = req.body.sport;
    let games = req.body.games;
    let conferenceRecord = req.body.conferenceRecord;
    let overallRecord = req.body.overallRecord;

    delete req.body.school;
    delete req.body.sport;
    delete req.body.games;
    delete req.body.conferenceRecord;
    delete req.body.overallRecord;

    let stats = req.body;

    try{
      if (school && school.length > 0) {
        if (sport && sport.length > 0) {
          let newTeam = await insertNewTeam(
            school,
            sport,
            games,
            conferenceRecord,
            overallRecord,
            stats
          );
  
          if (newTeam) {
            res.json(newTeam);
          } else {
            throw new MongoInsertError(
              "There was an error creating the new team"
            );
          }
        } else {
          throw new BadRequestError("You need to send a valid sport");
        }
      } else {
        throw new BadRequestError("You must enter a valid school");
      }
    } catch(err){
      next(err);
    }
  }
);

router.post("/teamsbysport", async (req: Request, res: Response, next: NextFunction) => {
    try{
      const sport = req.body.sport;

      if (sport && sport.toString() !== "") {
        const teams = await getTeamsBySport(sport.toString());
  
        res.json(teams);
      } else {
        throw new BadRequestError("You must enter a valid sport");
      }
    } catch(err){
      next(err);
    }
  }
);

router.patch("/update", async(req: Request, res: Response, next: NextFunction) => {
  try{
    const teamId = req.body.teamId;
    const field = req.body.field;
    const newValue = req.body.newValue;

    const updatedTeam = await updateTeam(ensureObjectId(teamId), field, newValue);

    res.json(updatedTeam);
  } catch(err){
    next(err);
  }
})

export default router;

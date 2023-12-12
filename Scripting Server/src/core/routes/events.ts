import express, { Request, Response, NextFunction, Router } from "express";
import { MongoInsertError } from "../errors/mongo";
import { BadRequestError, UnauthorizedError } from "../errors/user";
import { ensureObjectId } from "../utils/mongohelper";
import { getAllEvents, getEventsBySport, insertNewEvent } from "../mongo/events";

const router: Router = express.Router();

router.post(
    "/create",
    async (req: Request, res: Response, next: NextFunction) => {
      let eventName = req.body.eventName;
      let sport = req.body.sport;
      let date = req.body.date;
      let location = req.body.location;
      let home = req.body.home;
      let away = req.body.away;
  
      try{
        if (home && home.length > 0) {
          if (away && away.length > 0) {
            let newEvent = await insertNewEvent(eventName, sport, date, location, home, away);
    
            if (newEvent) {
              res.json(newEvent);
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

  router.get(
    "/all",
    async (req: Request, res: Response, next: NextFunction) => {
      try{
        const events = await getAllEvents();
    
        res.json(events);
      } catch(err){
        next(err);
      }
    }
  );

  router.post("/getbysport", async(req: Request, res: Response, next: NextFunction) => {
    const sport = req.body.sport;
    
    try{
      const event = await getEventsBySport(sport);
  
      res.json(event);
    } catch(err){
      next(err);
    }
  });

  export default router;
import { ObjectId } from "mongodb";
import { Athlete } from "./athlete";
import { Event } from "./event";

//Add routes for adding/removing events + adding/removing players to roster
export class Team {
  _id: ObjectId = new ObjectId();
  school: string = "";
  sport: string = "";
  roster: ObjectId[] = [];
  games: number = 0;
  conferenceRecord: string = "";
  overallRecord: string = "";
  schedule: Event[] = [];
  stats = {};
}


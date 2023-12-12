import { ObjectId } from "mongodb";
import { Player } from "./player";
import { Event } from "./event";

//Add routes for adding/removing events + adding/removing players to roster
export class Team {
  _id: ObjectId = new ObjectId();
  // sportId: string = "";
  sport: string = "";
  // gender: string = '';

  school: string = "";
  roster: Player[] = [];
  games: number = 0;
  conferenceRecord: string = "";
  overallRecord: string = "";
  schedule: Event[] = [];
  stats = {};
}


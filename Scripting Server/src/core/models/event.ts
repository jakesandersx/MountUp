import { ObjectId } from "mongodb";

export class Event {
  _id: ObjectId = new ObjectId();
  date: Date = new Date();
  sport: string = "";
  eventName: string = "";
  location: string = "";
  home: ObjectId = new ObjectId();
  away: ObjectId = new ObjectId();
}


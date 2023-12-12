import { ObjectId } from "mongodb";

export class Event {
  _id: ObjectId = new ObjectId();
  date: Date = new Date();
  eventName: string = "";
  location: string = "";
  opponent: string = "";
}


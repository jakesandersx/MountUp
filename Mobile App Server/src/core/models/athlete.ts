import { ObjectId } from "mongodb";

export class Athlete {
  _id: ObjectId = new ObjectId();
  name: string = "";
  position: string = "";
  number: number = 0;
  from: string = "";
  grade: string = "";
  stats = {};
}


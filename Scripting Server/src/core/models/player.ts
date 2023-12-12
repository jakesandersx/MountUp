import { ObjectId } from "mongodb";

export class Player {
  _id: ObjectId = new ObjectId();
  name: string = "";
  posiion: string = "";
  number: number = 0;
  from: string = "";
  grade: string = "";
  stats = {};
}


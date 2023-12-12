import { ObjectId } from "mongodb";

export class Article {
    _id: ObjectId = new ObjectId();
    title: string = "";
    sport: string = "";
    author: string = "";
    body: string = "";
    links: string = "";
    posted: Date = new Date();
}
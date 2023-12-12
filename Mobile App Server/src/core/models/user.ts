import { ObjectId } from "mongodb";

//Add routes for changing user's points
export class User{
    _id: ObjectId = new ObjectId();
    firstName: string = "";
    lastName: string = "";
    email: string = "";
    password: string = "";
    checked: string = "";
    studentId: string | null = null;
    following: ObjectId[] = [];
    createAt: Date = new Date();
    updatedAt: Date = new Date();
    roarStorePoints: number = 0;
}
import { AggregationCursor, ObjectId } from "mongodb";
import { MongoFindError, MongoInsertError, MongoUpdateError } from "../errors/mongo";
import { User } from "../models/user";
import { getDb } from "../utils/mongohelper";
import * as bcrypt from "bcrypt";
import { Team } from "../models/teams";
import { BadRequestError } from "../errors/user";

export const insertNewUser = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  checked: string,
  studentId: string | null
): Promise<User> => {
  return new Promise(async (resolve, reject) => {
    try {
      let db = await getDb();
      const collection = await db.collection<User>("users");

      bcrypt.hash(password, 10, async (err, hash) => {
        const newUser = new User();
        newUser.firstName = firstName;
        newUser.lastName = lastName;
        newUser.email = email;
        newUser.password = hash;
        newUser.checked = checked;
        newUser.studentId = studentId;
        newUser.createAt = new Date();
        newUser.updatedAt = new Date();

        const result = await collection.insertOne(newUser);

        if (result.acknowledged) {
          newUser._id = result.insertedId;
          resolve(newUser);
        } else {
          throw new MongoInsertError(
            "Something went wrong while inserting a new user"
          );
        }
      });
    } catch (err) {
      reject(err);
    }
  });
};

export const getUserByEmail = async (
  email: string
): Promise<User | null> => {
  return new Promise(async (resolve, reject) => {
    try {
      let db = await getDb();
      const collection = await db.collection<User>("users");

      const result = await collection.findOne({ email });

      if (result) {
        resolve(result);
      } else {
        resolve(null);
      }
    } catch (err) {
      reject(err);
    }
  });
};

export const addFollowing = async(username: string, teamId: ObjectId): Promise<User> => {
  return new Promise(async(resolve, reject)=>{
    try{
      let db = await getDb();
      const collection = await db.collection<User>("users");

      const team = await db.collection<Team>('teams').findOne({ _id: teamId });

      if(team){
        const result = await collection.updateOne({ username }, {$addToSet: {following: teamId}});
        const updatedUser = await collection.findOne({ username });

        if(updatedUser){
          resolve(updatedUser);
        } else{
          throw new MongoUpdateError("There was an error following this team");
        }
      } else{
        throw new MongoUpdateError("There was an error following this team");
      }
    } catch(err){
      reject(err);
    }
  })
};

export const unfollowTeam = async(username: string, teamId: ObjectId): Promise<User | null> => {
  return new Promise(async(resolve, reject) => {
    try{
      let db = await getDb();
      const collection = await db.collection<User>("users");

      const team = await db.collection<Team>("teams").findOne({ _id: teamId });

      if(team){
        const result = await collection.updateOne({ username }, {$remove: {following: teamId}});
        const updatedUser = await collection.findOne({ username });

        if(updatedUser){
          resolve(updatedUser);
        } else{
          throw new MongoUpdateError("There was an error unfollowing this team");
        }
      } else {
        throw new MongoUpdateError("There was an error unfollowing this team");
      }
    } catch(err){
      reject(err);
    }
  })
}

export const getFollowedTeams = async(username: string): Promise<Team[] | null> => {
  return new Promise(async(resolve,reject) => {
    let db = await getDb();
    const collection = await db.collection<User>("users");

    const result: AggregationCursor<Team[]> = collection.aggregate([
      {$match: {username: username}},
      {
        $lookup: {
          from: "teams",
          localField: "following",
          foreignField: "_id",
          as: "following"
        }
      }
    ]);

    if (result) {
      const resultArray = await result.toArray();
      if (resultArray.length > 0) {
        resolve(resultArray[0]);
      } else {
        throw new BadRequestError(
          "The ID that you provided does not have a corresponding team"
        );
      }
    } else {
      throw new MongoFindError(
        "The aggregation for a teamById returned as undefined"
      );
    }
  })
}
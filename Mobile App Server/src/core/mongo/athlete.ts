import { ObjectId } from "mongodb";
import { MongoInsertError } from "../errors/mongo";
import { ensureObjectId, getDb } from "../utils/mongohelper";
import { Team } from "../models/teams";
import { Athlete } from "../models/athlete";

export const insertNewAthlete = async (name: string, number: number, position: string, grade: string, from: string, stats: {}, ): Promise<Athlete> => {
    return new Promise(async (resolve, reject) => {
      try {
        let db = await getDb();
        const collection = await db.collection<Athlete>("athletes");
  
        const newAthlete = new Athlete();
        newAthlete.name = name;
        newAthlete.number = number;
        newAthlete.position = position;
        newAthlete.grade = grade;
        newAthlete.from = from;
        newAthlete.stats = stats;
  
        const result = await collection.insertOne(newAthlete);
  
        if (result.acknowledged) {
          newAthlete._id = result.insertedId;
          resolve(newAthlete);
        } else {
          throw new MongoInsertError(
            "Something went wrong while inserting a new athlete"
          );
        }
      } catch (err) {
        reject(err);
      }
    });
  };

  export const getAthleteById = async( athleteId: ObjectId | string): Promise<Athlete | null> => {
    return new Promise(async (resolve, reject) => {
      try{
        let db = await getDb();
        const collection = await db.collection<Athlete>("athletes");

        const result = await collection.findOne({ _id: ensureObjectId(athleteId)});

        if(result){
          resolve(result);
        } else{
          resolve(null)
        }

      } catch(err){
        reject(err);
      }
    })
  } 
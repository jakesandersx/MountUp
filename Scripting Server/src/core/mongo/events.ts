import { ObjectId } from "mongodb";
import { MongoInsertError } from "../errors/mongo";
import { Event } from "../models/event";
import { getDb, ensureObjectId } from "../utils/mongohelper";

export const insertNewEvent = async(eventName: string, sport: string, date: Date, location: string, home: ObjectId | string, away:ObjectId | string): Promise<Event> => {
    return new Promise(async(resolve, reject) => {
        try {
            let db = await getDb();
            const collection = await db.collection<Event>("events");
      
            const newEvent = new Event();
            newEvent.eventName = eventName;
            newEvent.sport = sport;
            newEvent.date = date;
            newEvent.location = location;
            newEvent.home = ensureObjectId(home);
            newEvent.away = ensureObjectId(away);
      
            const result = await collection.insertOne(newEvent);
      
            if (result.acknowledged) {
              newEvent._id = result.insertedId;
              resolve(newEvent);
            } else {
              throw new MongoInsertError(
                "Something went wrong while inserting a new team"
              );
            }
          } catch (err) {
            reject(err);
          }
    })
}

export const getAllEvents = async (): Promise<Event[]> => {
    return new Promise(async (resolve, reject) => {
      try {
        let db = await getDb();
        const collection = await db.collection<Event>("events");
  
        const result = await collection.find().toArray();
  
        resolve(result);
      } catch (err) {
        reject(err);
      }
    });
  };

  export const getEventsBySport = async (sport: string): Promise<Event[] | null> => {
    return new Promise(async (resolve, reject) => {
      try{
        let db = await getDb();
        const collection = await db.collection<Event>("events");
  
        const result = await collection.find({ sport }).toArray();
  
        if(result){
          resolve(result);
        } else{
          resolve(null);
        }
      } catch(err){
        reject(err);
      }
    })
  }
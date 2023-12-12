import { ObjectId } from "mongodb";
import { MongoInsertError } from "../errors/mongo";
import { ensureObjectId, getDb } from "../utils/mongohelper";
import { Team } from "../models/teams";
import { Athlete } from "../models/athlete";
import { getAthleteById } from "./athlete";

export const insertNewTeam = async (
  school: string,
  sport: string,
  games: number,
  conferenceRecord: string,
  overallRecord: string,
  stats: {}
): Promise<Team> => {
  return new Promise(async (resolve, reject) => {
    try {
      let db = await getDb();
      const collection = await db.collection<Team>("teams");

      const newTeam = new Team();
      newTeam.school = school;
      newTeam.sport = sport;
      newTeam.games = games;
      newTeam.conferenceRecord = conferenceRecord;
      newTeam.overallRecord = overallRecord;
      newTeam.stats = stats;

      const result = await collection.insertOne(newTeam);

      if (result.acknowledged) {
        newTeam._id = result.insertedId;
        resolve(newTeam);
      } else {
        throw new MongoInsertError(
          "Something went wrong while inserting a new team"
        );
      }
    } catch (err) {
      reject(err);
    }
  });
};

export const getTeamsBySport = async (sport: string): Promise<Team[] | null> => {
  return new Promise(async (resolve, reject) => {
    try {
      let db = await getDb();
      const collection = await db.collection<Team>("teams");

      const result = await collection.find({ sport }).toArray();

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

export const updateTeam = async(teamId: ObjectId, field: string, newValue: string | number): Promise<Team | null> => {
  return new Promise(async(resolve, reject) => {
    try{
      let db = await getDb();
      const collection = await db.collection<Team>("teams");

      const result = await collection.updateOne({_id: teamId}, {$set: {[field]: newValue}});

      if(result.acknowledged){
        resolve(collection.findOne({ _id: teamId }));
      } else{
        resolve(null);
      }
    } catch(err){
        reject(err);
    }
  })
}


export const addAthleteToRoster = async(teamId: ObjectId | string, athleteId: ObjectId | string): Promise<Team | null> => {
  return new Promise(async(resolve,reject) => {
    try{
      let db = await getDb();
      const collection = await db.collection<Team>("teams");

      const result = await collection.updateOne({_id: ensureObjectId(teamId)}, {$push: {roster: ensureObjectId(athleteId)}});
      console.log(result);

      if(result){
        resolve(collection.findOne({_id: ensureObjectId(teamId)}));
      } else{
        resolve(null);
      }
    } catch(err){
      reject(err);
    }
  })
}

export const getFullRosterBySport = async(teamId: ObjectId | string): Promise<Athlete[]> => {
  return new Promise(async(resolve, reject) => {
    try{
      let db = await getDb();
      const collection = await db.collection<Team>("teams");

      const team = await collection.findOne({ _id: ensureObjectId(teamId) });

      const roster = team ? team.roster : null;
      let fullRoster: Array<Athlete> = []

      if(roster){
        for(let i = 0; i < roster.length; i++){
          const athlete = await getAthleteById(roster[i]);

          if(athlete){
            fullRoster.push(athlete);
          }
          if(i === roster.length - 1){
            resolve(fullRoster);
          }
        }
      }
    } catch(err){
      reject(err);
    }
  })
}
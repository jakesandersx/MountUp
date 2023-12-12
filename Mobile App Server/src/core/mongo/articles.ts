import { ObjectId } from "mongodb";
import { MongoInsertError } from "../errors/mongo";
import { Article } from "../models/article"
import { getDb, ensureObjectId } from "../utils/mongohelper";

export const insertNewArticle = async(title: string, sport: string, author: string, body: string, links: string): Promise<Article> => {
    return new Promise(async(resolve, reject) => {
        try {
            let db = await getDb();
            const collection = await db.collection<Article>("articles");
      
            const newArticle = new Article();
            newArticle.title = title;
            newArticle.sport = sport;
            newArticle.author = author;
            newArticle.body = body;
            newArticle.links = links;
      
            const result = await collection.insertOne(newArticle);
      
            if (result.acknowledged) {
              newArticle._id = result.insertedId;
              resolve(newArticle);
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

export const getAllArticles = async (): Promise<Article[]> => {
  return new Promise(async (resolve, reject) => {
    try {
      let db = await getDb();
      const collection = await db.collection<Article>("articles");

      const result = await collection.find().toArray();

      resolve(result);
    } catch (err) {
      reject(err);
    }
  });
};

export const getArticleById = async (_id: string | ObjectId): Promise<Article | null> => {
  return new Promise(async (resolve, reject) => {
    try{
      let db = await getDb();
      const collection = await db.collection<Article>("articles");

      const result = await collection.findOne(ensureObjectId(_id));

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
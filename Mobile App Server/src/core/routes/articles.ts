import express, { Request, Response, NextFunction, Router } from "express";
import { MongoInsertError } from "../errors/mongo";
import { BadRequestError, UnauthorizedError } from "../errors/user";
import { isLoggedIn } from "../middleware/auth";
import { ensureObjectId } from "../utils/mongohelper";
import { insertNewArticle, getAllArticles, getArticleById } from "../mongo/articles";

const router: Router = express.Router();

router.post(
  "/create",
  isLoggedIn,
  async (req: Request, res: Response, next: NextFunction) => {
    let title = req.body.title;
    let sport = req.body.sport;
    let author = req.body.author;
    let body = req.body.body;
    let links = req.body.links;

    try{
      if (title && title.length > 0) {
        if (body && body.length > 0) {
          let newArticle = await insertNewArticle(title, sport, author, body, links);
  
          if (newArticle) {
            res.json(newArticle);
          } else {
            throw new MongoInsertError(
              "There was an error creating the new team"
            );
          }
        } else {
          throw new BadRequestError("You need to send a valid sport");
        }
      } else {
        throw new BadRequestError("You must enter a valid school");
      }
    } catch(err){
      next(err);
    }
  }
);

router.get(
  "/all",
  isLoggedIn,
  async (req: Request, res: Response, next: NextFunction) => {
    try{
      const articles = await getAllArticles();
  
      res.json(articles);
    } catch(err){
      next(err);
    }
  }
);

router.post("/getbyid", isLoggedIn, async(req: Request, res: Response, next: NextFunction) => {
  const articleId = req.body.articleId;
  
  try{
    const article = await getArticleById(articleId);

    res.json(article);
  } catch(err){
    next(err);
  }
})

export default router;

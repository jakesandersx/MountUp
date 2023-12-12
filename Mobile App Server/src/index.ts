import express, {Request, Response, NextFunction} from 'express';
import * as http from 'http';
import * as bodyParser from 'body-parser';
import session from 'express-session';
import user from './core/routes/user';
import sports from './core/routes/teams';
import articles from './core/routes/articles';
import athletes from './core/routes/athlete';
import {Me} from './core/models/me';
import config from './core/config';
import { UserError } from './core/errors/base';
import winston from "winston";
import { logger } from "./core/utils/logger";
import cors from 'cors';


interface IMainOptions{
    port: number;
    env: string;
}

declare module 'express-session' {
    interface SessionData {
        Me: Me
    }
}

export async function main(options: IMainOptions){

    try{

    
        if(options.env === "development"){
            winston.addColors(config.logging.colors);
        }else{
            logger.add(new winston.transports.File({filename: config.logging.file, level: config.logging.level}));
        }

    const app = express();

    app.use(bodyParser.json({limit: '5mb'}));
    app.use(bodyParser.urlencoded({extended: false, limit: '5mb'}));

    const sess = session({ secret: config.server.secret, resave: false, saveUninitialized: false, cookie: { secure: false, maxAge: 6000000 }});
    app.use(sess);

    app.use(cors());

    app.use('/user', user);
    app.use('/teams', sports);
    app.use('/articles', articles);
    app.use('/athletes', athletes);
    app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        if(err instanceof UserError){
            res.status(err.statusCode).send({message: err.message});
        }else{
            res.status(500).send("A server error occured");
        }

        logger.log({level: "error", message: `There was a problem with a server request: ${err.message}`});       
    });

    const server = http.createServer(app);

    server.listen(options.port);

    }catch(err){
        throw err;
    }

}

if(require.main === module){
    const PORT = 7000;
    const ENV = process.env.NODE_ENV ?? "development";
    
    main({port: PORT, env: ENV}).then(() => {logger.log({level: "debug", message: "The server started successfully"})}).catch((err) => {logger.log({level: "emerg", message: `Something bad happened with the server: ${err}`})});
}
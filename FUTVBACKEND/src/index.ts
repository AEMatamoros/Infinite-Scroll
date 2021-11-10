import "reflect-metadata";
import {createConnection} from "typeorm";
//Express
import * as express from 'express';
//Global Confs
import * as cors from 'cors';
//Routes
import { publicationRouter } from './routes/publication-routes';
import { publicationFilesRouter } from './routes/publication-files-routes';
import { publicationTagsRouter } from './routes/publication-tag-routes';

createConnection().then(async connection => {

    console.log("Db Conected");
    const app = express();
    
    //Confs
    app.use(cors());
    app.use(express.urlencoded({extended:true}));
    app.use(express.json());
    

    //Routes
    app.use('/publication',publicationRouter);
    app.use('/publication_files',publicationFilesRouter);
    app.use('/publication_tags',publicationTagsRouter);
    app.use('/files', express.static('./src/files'));
    
    app.listen(3000,()=>{
        console.log('Server On');
    })
    

}).catch(error => console.log(error));

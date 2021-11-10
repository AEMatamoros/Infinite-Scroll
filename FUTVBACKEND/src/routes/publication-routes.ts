import { Router } from 'express';

import { options } from '../controllers/publication-controller';

import { upload } from '../helpers/upload';

export const publicationRouter = Router();



publicationRouter.get('/:offset',options.getPublications, (req,res)=>{

})

publicationRouter.get('/one/:id',options.getPublication, (req,res)=>{

})

publicationRouter.post('/',upload.array('files',10),options.postPublication,(req,res)=>{
})

publicationRouter.put('/:id',options.putPublication,(req,res)=>{
    
})

publicationRouter.delete('/:id',options.deletePublication,(req,res)=>{
    
})
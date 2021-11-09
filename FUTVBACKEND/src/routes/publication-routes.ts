import { Router } from 'express';

import { options } from '../controllers/publication-controller';

export const publicationRouter = Router();



publicationRouter.get('/',options.getPublications, (req,res)=>{

})

publicationRouter.get('/:id',options.getPublication, (req,res)=>{

})

publicationRouter.post('/',options.postPublication,(req,res)=>{

})

publicationRouter.put('/:id',options.putPublication,(req,res)=>{
    
})

publicationRouter.delete('/:id',options.deletePublication,(req,res)=>{
    
})
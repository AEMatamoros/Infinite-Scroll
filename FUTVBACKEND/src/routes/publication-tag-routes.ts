import { Router } from 'express';

import { options } from '../controllers/publication-tags-controller';

export const publicationTagsRouter = Router();



publicationTagsRouter.get('/',options.getTags, (req,res)=>{

})

publicationTagsRouter.get('/:id',options.getTag, (req,res)=>{

})

publicationTagsRouter.post('/',options.postTag,(req,res)=>{

})

publicationTagsRouter.put('/:id',options.putTag,(req,res)=>{
    
})

publicationTagsRouter.delete('/:id',options.deleteTag,(req,res)=>{
    
})
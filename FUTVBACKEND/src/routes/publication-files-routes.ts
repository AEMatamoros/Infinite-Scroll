import { Router } from 'express';

import { options } from '../controllers/publication-files-controller';

export const publicationFilesRouter = Router();



publicationFilesRouter.get('/',options.getFiles, (req,res)=>{

})

publicationFilesRouter.get('/:id',options.getFile, (req,res)=>{

})

publicationFilesRouter.post('/',options.postFile,(req,res)=>{

})

publicationFilesRouter.put('/:id',options.putFile,(req,res)=>{
    
})

publicationFilesRouter.delete('/:id',options.deleteFile,(req,res)=>{
    
})
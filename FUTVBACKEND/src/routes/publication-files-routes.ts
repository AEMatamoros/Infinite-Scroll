import { Router } from 'express';

import { options } from '../controllers/publication-files-controller';
//Multer
import { upload } from '../helpers/upload'

export const publicationFilesRouter = Router();

//Routes
publicationFilesRouter.get('/', options.getFiles, (req, res) => {

})

publicationFilesRouter.get('/:id', options.getFile, (req, res) => {

})

publicationFilesRouter.post('/',upload.array('files',10), options.postFile, (req, res) => {
    
})

publicationFilesRouter.put('/:id', options.putFile, (req, res) => {

})

publicationFilesRouter.delete('/:id', options.deleteFile, (req, res) => {

})
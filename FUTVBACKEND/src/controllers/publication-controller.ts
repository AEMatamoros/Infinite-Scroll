import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
//Entities
import { Publication } from "../entity/Publication";
import { File } from "../entity/Files";
import { Tag } from '../entity/Tags'; 
const getPublications = async (req: Request, res: Response, next: NextFunction) => {
   try {
      const publicationRepository = getRepository(Publication);
      const publications = await publicationRepository.find({ relations: ["files", 'tags'], take: 3, skip: parseInt(req.params.offset) ,order:{id:-1}})
      res.status(200).json({
         ok: true,
         msg: 'Registros obtenidos',
         registros: publications,
         numeroDeRegistros: await publicationRepository.count()
      });
   } catch (error) {
      res.status(400).json({
         ok: false,
         msg: 'Ha ocurrido un error',
         err: error
      });
   }

}

const getPublication = async (req: Request, res: Response, next: NextFunction) => {
   try {
      const publicationRepository = getRepository(Publication);
      const publications = await publicationRepository.findOne(req.params.id, { relations: ["files", 'tags'] });
      res.status(200).json({
         ok: true,
         msg: 'Registros obtenidos',
         registros: publications
      });
   } catch (error) {
      res.status(400).json({
         ok: false,
         msg: 'Ha ocurrido un error',
         err: error
      });
   }

}

const postPublication = async (req: Request, res: Response, next: NextFunction) => {
   
   try {
      let publication = req.body;

      const publicationRepository = getRepository(Publication);
      const newPublication = await publicationRepository.save(publication);

      if (req.files && req.files.length > 0) {

         const fileRepository = getRepository(File)
         for (let i = 0; i < req.files.length; i++) {
            let newFile = {publication:newPublication.id,file_name:req.files[i].filename};
            await fileRepository.save(newFile);
         };

      }

      if ( req.body.tags && req.body.tags.length>0){
         const tagRepository = getRepository(Tag)
         for (let i = 0; i < req.body.tags.length; i++) {
            let newTag = {publication:newPublication.id,tag:req.body.tags[i]};
            let saved = await tagRepository.save(newTag);
         };

      }

      res.status(200).json({
         ok: true,
         msg: 'Registros guardado',
         registros: newPublication,
      });
   } catch (error) {
      res.status(400).json({
         ok: false,
         msg: 'Ha ocurrido un error',
         err: error
      });
   }

}

const putPublication = async (req: Request, res: Response, next: NextFunction) => {
   try {

      const publicationRepository = getRepository(Publication);
      const publication = await publicationRepository.findOne(req.params.id)
      if (publication) {
         const newPublication = await publicationRepository.save(req.body);
         res.status(200).json({
            ok: true,
            msg: 'Registros guardado',
            registros: newPublication
         })
      } else {
         res.status(400).json({
            ok: false,
            msg: 'No existen registros con ese id'

         })
      }

   } catch (error) {
      res.status(400).json({
         ok: false,
         msg: 'Ha ocurrido un error',
         err: error
      });
   }

}

const deletePublication = async (req: Request, res: Response, next: NextFunction) => {
   try {
      const publicationRepository = getRepository(Publication);
      const publication = await publicationRepository.findOne(req.params.id)
      if (publication) {
         const action = await publicationRepository.remove(publication)
         res.status(200).json({
            ok: true,
            msg: 'Registros guardado',
            registros: action
         })
      } else {
         res.status(400).json({
            ok: false,
            msg: 'No existen registros con ese id'

         })
      }
   } catch (error) {
      res.status(400).json({
         ok: false,
         msg: 'Ha ocurrido un error',
         err: error
      });
   }

}


export const options = {
   getPublications,
   getPublication,
   postPublication,
   putPublication,
   deletePublication
}

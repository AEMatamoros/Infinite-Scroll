import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Publication } from "../entity/Publication";

const getPublications = async (req: Request, res: Response, next: NextFunction) => {
   try {
      const publicationRepository = getRepository(Publication);
      const publications = await publicationRepository.find()
      res.status(200).json({
         ok: true,
         msg: 'Registros obtenidos',
         registros: publications
      })
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
      const publications = await publicationRepository.findOne(req.params.id);
      res.status(200).json({
         ok: true,
         msg: 'Registros obtenidos',
         registros: publications
      })
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
      const publicationRepository = getRepository(Publication);
      const newPublication = await publicationRepository.save(req.body);
      res.status(200).json({
         ok: true,
         msg: 'Registros guardado',
         registros: newPublication
      })
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

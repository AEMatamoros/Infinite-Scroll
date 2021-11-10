import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Tag } from "../entity/Tags";

const getTags = async (req: Request, res: Response, next: NextFunction) => {
   try {
      const TagRepository = getRepository(Tag);
      const tags = await TagRepository.find()
      res.status(200).json({
         ok: true,
         msg: 'Registros obtenidos',
         registros: tags
      })
   } catch (error) {
      res.status(400).json({
         ok: false,
         msg: 'Ha ocurrido un error',
         err: error
      });
   }

}

const getTag = async (req: Request, res: Response, next: NextFunction) => {
   try {
      const tagRepository = getRepository(Tag);
      const tag = await tagRepository.findOne(req.params.id);
      res.status(200).json({
         ok: true,
         msg: 'Registros obtenidos',
         registros: tag
      })
   } catch (error) {
      res.status(400).json({
         ok: false,
         msg: 'Ha ocurrido un error',
         err: error
      });
   }

}

const postTag = async (req: Request, res: Response, next: NextFunction) => {
   try {
      const tagRepository = getRepository(Tag);
      const newTag = await tagRepository.save(req.body);
      res.status(200).json({
         ok: true,
         msg: 'Registros guardado',
         registros: newTag
      })
   } catch (error) {
      res.status(400).json({
         ok: false,
         msg: 'Ha ocurrido un error',
         err: error
      });
   }

}

const putTag = async (req: Request, res: Response, next: NextFunction) => {
   try {

      const tagRepository = getRepository(Tag);
      const tag = await tagRepository.findOne(req.params.id)
      if (tag) {
         const newTag = await tagRepository.save(req.body);
         res.status(200).json({
            ok: true,
            msg: 'Registros guardado',
            registros: newTag
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

const deleteTag = async (req: Request, res: Response, next: NextFunction) => {
   try {
      const tagRepository = getRepository(Tag);
      const tag = await tagRepository.findOne(req.params.id)
      if (tag) {
         const action = await tagRepository.remove(tag)
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
   getTag,
   getTags,
   postTag,
   deleteTag,
   putTag
}

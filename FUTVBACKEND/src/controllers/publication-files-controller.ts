import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { File } from "../entity/Files";

const getFiles = async (req: Request, res: Response, next: NextFunction) => {
   try {
      const fileRepository = getRepository(File);
      const files = await fileRepository.find()
      res.status(200).json({
         ok: true,
         msg: 'Registros obtenidos',
         registros: files
      })
   } catch (error) {
      res.status(400).json({
         ok: false,
         msg: 'Ha ocurrido un error',
         err: error
      });
   }

}

const getFile = async (req: Request, res: Response, next: NextFunction) => {
   try {
      const fileRepository = getRepository(File);
      const file = await fileRepository.findOne(req.params.id);
      res.status(200).json({
         ok: true,
         msg: 'Registros obtenidos',
         registros: file
      })
   } catch (error) {
      res.status(400).json({
         ok: false,
         msg: 'Ha ocurrido un error',
         err: error
      });
   }

}

const postFile = async (req: Request, res: Response, next: NextFunction) => {
   try {
      const fileRepository = getRepository(File);
      const newFile = await fileRepository.save(req.body);
      res.status(200).json({
         ok: true,
         msg: 'Registros guardado',
         registros: newFile
      })
   } catch (error) {
      res.status(400).json({
         ok: false,
         msg: 'Ha ocurrido un error',
         err: error
      });
   }

}

const putFile = async (req: Request, res: Response, next: NextFunction) => {
   try {

      const fileRepository = getRepository(File);
      const file = await fileRepository.findOne(req.params.id)
      if (file) {
         const newFile = await fileRepository.save(req.body);
         res.status(200).json({
            ok: true,
            msg: 'Registros guardado',
            registros: newFile
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

const deleteFile = async (req: Request, res: Response, next: NextFunction) => {
   try {
      const fileRepository = getRepository(File);
      const file = await fileRepository.findOne(req.params.id)
      if (file) {
         const action = await fileRepository.remove(file)
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
   getFile,
   getFiles,
   postFile,
   deleteFile,
   putFile
}

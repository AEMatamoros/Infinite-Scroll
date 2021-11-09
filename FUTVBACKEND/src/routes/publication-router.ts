import { Router,Request,Response } from "express";
export const publicationRouter = Router();

publicationRouter.get("/", (req: Request, res: Response) => {
   res.status(200).json({
       ok:true,
       msg:'GET PUBLICATIONS'
   })
});

publicationRouter.post("/", (req: Request, res: Response) => {
    res.status(200).json({
        ok:true,
        msg:'POST PUBLICATIONS'
    })
 });

 publicationRouter.put("/:id", (req: Request, res: Response) => {
    res.status(200).json({
        ok:true,
        msg:'PUT PUBLICATIONS'
    })
 });

 publicationRouter.delete("/:id", (req: Request, res: Response) => {
    res.status(200).json({
        ok:true,
        msg:'DELETE PUBLICATIONS'
    })
 });
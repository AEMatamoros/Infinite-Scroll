const { response } = require('express');
const con = require('../database/config');

const getPublications = (req,res, next)=>{
    const query = `SELECT * FROM publication LIMIT ${req.params.offset}, 3;`;
    con.query(query,(err,results)=>{
        if(err){
            console.log(err);
            throw(err);
        }else{
            res.status(200).json({
                ok:true,
                msg:'Registros obtenidos',
                publications:results
            })
        }
    })
    next()
}

const createPublication = (req, res=response, next) => {
    
    const query = `INSERT INTO publication  
                   (title, description, img) 
                   VALUES 
                   ('${req.body.title}', '${req.body.description}', '${req.file.filename}');
    `;
    
    con.query(query,(err,results)=>{
        if(err){
            console.log(err);
            next(err)
        }else{
            res.status(200).json({
                ok:true,
                title:'Creado exitosamente.',
                msg:"La publicacion fue creada de forma exitosa"
            })
        }
    })
}


module.exports = {
    getPublications,
    createPublication
}
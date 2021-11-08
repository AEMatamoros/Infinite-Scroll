const { response } = require('express')
const con = require('../database/config')

const getPublications = (req, res, next) => {
  let query = `SELECT p.* 
                 FROM publication as p 
                 LIMIT ${req.params.offset}, 3;
                 
                 SELECT p.id as publication_id ,fp.file_name
                 FROM publication AS p
                 INNER JOIN files_x_publication as fp
                 ON fp.publication_id = p.id;
                 
                 SELECT p.id as publication_id ,tp.id as tag_id,tp.tag
                 FROM publication AS p
                 INNER JOIN tags_x_publication AS tp
	             ON tp.publication_id = p.id;`

  con.query(query, (err, results) => {
    if (err) {
      console.log(err)
      throw err
    } else {
      let publications = results[0];
      let publications_files = results[1];
      let tags = results[2];
      publications.map((pub) => {
        pub.files = []
        pub.tags = []
        publications_files.forEach((pub_file) => {
          if (pub_file.publication_id == pub.id) {
            pub.files.push(pub_file)
          }
        })

        tags.forEach(tag=>{
            if (tag.publication_id == pub.id) {
                pub.tags.push(tag.tag)
              }
        })

      })
      res.status(200).json({
        ok: true,
        msg: 'Registros obtenidos',
        publications: publications,
        tags: results[2]
      })
    }
  })
  next()
}

const createPublication = (req, res = response, next) => {
  const query = `INSERT INTO publication  
                   (title, description) 
                   VALUES 
                   ('${req.body.title}', '${req.body.description}');
    `

  con.query(query, (err, results) => {
    if (err) {
      console.log(err)
      next(err)
    } else {
      letPubId=results.insertId;
      let filesQuery = ''
      if (req.files.length > 0) {
        req.files.forEach((file) => {
          filesQuery += `INSERT INTO files_x_publication (file_name,publication_id) 
                              VALUES ('${file.filename}',${letPubId});`
        })

        con.query(filesQuery, (err, results) => {
          if (err) {
            console.log(err)
            next(err)
          } else {
            let tagQuery = ''
            if (req.body.tags.length > 0) {
              req.body.tags.forEach((tag) => {
                tagQuery += `INSERT INTO tags_x_publication (tag,publication_id) 
                                  VALUES ('${tag}',${letPubId});`
              })
            }


            con.query(tagQuery, (err, results) => {
              if (err) {
                console.log(err)
                next(err)
              } else {
                res.status(200).json({
                  ok: true,
                  msg: 'Registros agregado correctamente',
                })
              }
            })
          }
        })
      } else {
        let tagQuery = ''
        if (req.body.tags.length > 0) {
            req.body.tags.forEach((tag) => {
            tagQuery += `INSERT INTO tags_x_publication (tag,publication_id) 
                                  VALUES ('${tag}',${letPubId});`
          })

          con.query(tagQuery, (err, results) => {
            if (err) {
              console.log(err)
              next(err)
            } else {
              res.status(200).json({
                ok: true,
                msg: 'Registros agregado correctamente',
              })
            }
          })
        }else{
            
            res.status(200).json({
                ok: true,
                msg: 'Registros agregado correctamente'
            })
                  
        }

        
      }
    }
  })
}

module.exports = {
  getPublications,
  createPublication,
}

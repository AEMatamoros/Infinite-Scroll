import * as multer from 'multer';

//Multer Configuration
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './src/files')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+ '_' + file.originalname.replace(/ /g, ''))
    }
}) 

export const upload = multer({ storage: storage })
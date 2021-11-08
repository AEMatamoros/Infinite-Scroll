const { Router } = require('express');
const router = Router();
//validations
const { check } = require('express-validator');
const { validarCampos } = require('../helpers/validar-campos');
//Multer
const multer = require('multer')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'images/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null,  uniqueSuffix + '_' + file.originalname.replace(/ /g, ''))
    }
})

const upload = multer({ storage: storage })
//Controllers
const { createPublication, getPublications } = require('../controller/publication-controller');
//Routes
router.get('/:offset',getPublications,(req, res) => {
})
router.post('/',upload.array('files[]',10), [
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('description', 'La descripcion es obligatoria').not().isEmpty()
    ],validarCampos ,createPublication,(req, res) => {

})


router.put('/', (req, res) => {
    res.status(200).json({ ok: true })
})

router.delete('/', (req, res) => {
    res.status(200).json({ ok: true })
})

module.exports = router;
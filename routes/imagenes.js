const {Router} = require('express');
const { check } = require('express-validator');
const { obtenerImagen,crearImagen,actualizarImagen,borrarImagen } = require('../controllers/imagen');
const { verificarImagenId } = require('../helpers/verifyImagen');
const { validarCampos } = require('../middlewares/validarCampos');
const { validarJWT } = require('../middlewares/validarJWT');

const router = new Router();


router.get('/',obtenerImagen);

router.post('/',[
    validarJWT,
    check('link','El link de la imagen es obligatorio').not().isEmpty(),
    check('link','El link de la imagen no es valido').isURL(),
    check('titulo','El titulo es obligatorio').not().isEmpty(),
    check('titulo','El titulo debe tener maximo 50 caracteres').isLength({max:50}),
    check('texto','El texto es obligatorio').not().isEmpty(),
    validarCampos
],crearImagen);

router.put('/:id',[
    validarJWT,
    check('id','El ID no puede estar vacio').not().isEmpty(),
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(verificarImagenId),
    check('link','El link de la imagen es obligatorio').not().isEmpty(),
    check('link','El link de la imagen no es valido').isURL(),
    check('titulo','El titulo es obligatorio').not().isEmpty(),
    check('titulo','El titulo debe tener maximo 50 caracteres').isLength({max:50}),
    check('texto','El texto es obligatorio').not().isEmpty(),
    validarCampos
],actualizarImagen);

router.delete('/:id',[
    validarJWT,
    check('id','El ID no puede estar vacio').not().isEmpty(),
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(verificarImagenId),
    validarCampos
],borrarImagen);

module.exports = router;
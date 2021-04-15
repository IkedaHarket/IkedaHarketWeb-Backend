const {Router} = require('express');
const { check } = require('express-validator');
const {
    obtenerHabilidades,
    crearHabilidad,
    actualizarHabilidad,
    eliminarHabilidad,
} = require('../controllers/habilidades');
const { validarCampos } = require('../middlewares/validarCampos');
const { validarJWT } = require('../middlewares/validarJWT');
const {
    verificarHabilidadNombre,
    verificarHabilidadId,
} = require('../helpers/verifyHabilidad')
const router = new Router();

router.get('/',obtenerHabilidades);
router.post('/',[ 
    validarJWT,
    check('color','El color es obligatorio').not().isEmpty(),
    check('color','El color debe ser hexadecimal').isHexColor(),
    check('nombre','El color es obligatorio').not().isEmpty(),
    check('nombre').custom(verificarHabilidadNombre),
    check('porcentaje','El porcentaje es obligatorio').not().isEmpty(),
    check('porcentaje','El porcentaje debe ser numerico').isNumeric(),
    validarCampos
],crearHabilidad);
router.put('/:id',[
    validarJWT,
    check('id','El ID no puede estar vacio').not().isEmpty(),
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(verificarHabilidadId),
    check('color','El color es obligatorio').not().isEmpty(),
    check('color','El color debe ser hexadecimal').isHexColor(),
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('porcentaje','El porcentaje es obligatorio').not().isEmpty(),
    check('porcentaje','El porcentaje debe ser numerico').isNumeric(),
    validarCampos
],actualizarHabilidad);
router.delete('/:id',[
    validarJWT,
    check('id','El ID no puede estar vacio').not().isEmpty(),
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(verificarHabilidadId),
    validarCampos
],eliminarHabilidad);

module.exports = router;
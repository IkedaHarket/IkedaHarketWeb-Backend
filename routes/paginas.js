const {Router} = require('express');
const { check } = require('express-validator');

const { obtenerPaginas, crearPagina, actualizarPagina, borrarPagina } = require('../controllers/paginas');
const { verificarPaginaId } = require('../helpers/verifyPagina');
const { validarCampos } = require('../middlewares/validarCampos');
const { validarJWT } = require('../middlewares/validarJWT');

const router = new Router();


router.get('/',obtenerPaginas);

router.post('/',[
    validarJWT,
    check('nombre','El nombre de la pagina es obligatorio').not().isEmpty(),
    check('enlace','El enlace de la pagina es obligatorio').not().isEmpty(),
    check('enlace','El link de la pagina no es valido').isURL(),
    check('imagen','La imagen es obligatoria').not().isEmpty(),
    check('imagen','El link de la imagen no es valido').isURL(),
    check('descripcion','El titulo debe tener maximo 300 caracteres').isLength({max:300}),
    validarCampos
],crearPagina);

router.put('/:id',[
    validarJWT,
    check('id','El ID no puede estar vacio').not().isEmpty(),
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(verificarPaginaId),
    check('enlace','El link de la pagina no es valido').isURL(),
    check('nombre','El nombre de la pagina es obligatorio').not().isEmpty(),
    check('imagen','El link de la imagen no es valido').isURL(),
    check('descripcion','El titulo debe tener maximo 300 caracteres').isLength({max:300}),
    validarCampos
],actualizarPagina);

router.delete('/:id',[
    validarJWT,
    check('id','El ID no puede estar vacio').not().isEmpty(),
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(verificarPaginaId),
    validarCampos
],borrarPagina);


module.exports = router;

const jwt = require('jsonwebtoken');

const Usuario = require('../models/usuario');
const env = require('../config/env');

const validarJWT = async(req,res,next)=>{

    const token = req.header('x-token');
    if(!token){
        return res.status(401).json({
            msg:"No hay token en la peticion"
        })
    }
    try {
        
        const {uid}  =jwt.verify(token,env.secretorprivatekey);//process.env.SECRETORPRIVATEKEY

        const usuario = await Usuario.findById(uid);
        if(!usuario){
            return res.status(401).json({
                msg:"Token no valido"
            });
        }
        req.usuario = usuario;
        
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg: 'Token no valido'
        })
    }
    
}

module.exports = {
    validarJWT
}
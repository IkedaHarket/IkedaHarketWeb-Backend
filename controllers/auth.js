const bcryptjs = require('bcryptjs');
const { generarJWT } = require('../helpers/generarJWT');
const Usuario = require("../models/usuario");



const login = async(req,res = response) =>{
    const {correo,password} = req.body;
    try {
        const usuario = await Usuario.findOne({correo})
        if(!usuario){
            return res.status(400).json({
                ok:false,
                errors:[{msg:"Usuario o contraseña incorrectos"}]
            })
        }
        const validPassword =  bcryptjs.compareSync(password,usuario.password)
        if(!validPassword){
            return res.status(400).json({
                ok:false,
                errors:[{msg:"Usuario o contraseña incorrectos"}]
            })
        }
        const token = await generarJWT(usuario.id);

        return res.status(200).json({
            ok:true,
            usuario,
            token
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg:"Error Interno del servidor"
        })
    }

}
const revalidarToken = async(req, res )=>{
    try {
        const uid = req.usuario.uid;
        const token = await generarJWT(uid);
        
        res.json({
            ok:true,
            msg:'renew',
            token,
            uid,
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg:"Error Interno del servidor"
        })
    }
}
module.exports={
    login,
    revalidarToken,
}
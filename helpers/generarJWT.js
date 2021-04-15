const jwt = require('jsonwebtoken');
const env = require('../config/env');

const generarJWT = (uid)=>{    
    return new Promise((resolve,reject)=>{
        const payload = {uid};

        jwt.sign(payload,env.secretorprivatekey,{//process.env.SECRETORPRIVATEKEY
            expiresIn: '1D'
        },(err,token)=>{
            if(err){
                console.log(err);
                reject('No se pudo generar el token');
            }else{
                resolve(token);
            }
        });
    })
}
module.exports = {
    generarJWT,
}
const Imagen = require("../models/imagen");




const verificarImagenId = async(id)=>{
    const existeImagen = await Imagen.findById(id);
    if(!existeImagen){
        throw new Error(`El id ${id} no existe`);
    }
}

module.exports = {
    verificarImagenId,
}
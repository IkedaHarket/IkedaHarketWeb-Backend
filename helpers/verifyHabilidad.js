const Habilidad = require("../models/habilidad")


const verificarHabilidadNombre = async(nombre)=>{
    const verificarHabilidad = await Habilidad.findOne({nombre})
    if(verificarHabilidad){
        throw new Error(`La habilidad ${nombre} ya existe`)
    }
}
const verificarHabilidadId = async(id)=>{
    const existehabilidad = await Habilidad.findById(id);
    if(!existehabilidad){
        throw new Error(`El id ${id} no existe`);
    }
}

module.exports = {
    verificarHabilidadNombre,
    verificarHabilidadId,
}
const Pagina = require("../models/paginas");


const verificarPaginaId = async(id)=>{
    const existePagina = await Pagina.findById(id);
    if(!existePagina){
        throw new Error(`El id ${id} no existe`);
    }
}

module.exports = {
    verificarPaginaId,
}
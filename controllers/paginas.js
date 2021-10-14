const Pagina = require('../models/paginas');

const obtenerPaginas = async(req,res)=>{
    try {
        const paginas = await Pagina.find();
        return res.status(200).json(paginas)
    } catch (error) {
        console.log(error)
        return res.status(500).json({msg:"Error interno del servidor"})
    }
}
const crearPagina = async(req,res)=>{
    try {
        const {...data} = req.body;
        const pagina = new Pagina({...data});
        await pagina.save();
        
        return res.status(201).json(pagina)
    } catch (error) {
        console.log(error)
        return res.status(500).json({msg:"Error interno del servidor"})
    }
}
const actualizarPagina = async(req,res)=>{
    try {
        const {id} = req.params;
        const {...data} = req.body;

        const pagina = await Pagina.findByIdAndUpdate(id,{...data},{new:true});

        return res.status(200).json(pagina)
    } catch (error) {
        console.log(error)
        return res.status(500).json({msg:"Error interno del servidor"});
    }
}
const borrarPagina = async(req,res)=>{
    try {
        const {id} = req.params;
        const pagina = await Pagina.findByIdAndDelete(id);
        res.status(200).json({pagina});
    } catch (error) {
        console.log(error)
        return res.status(500).json({msg:"Error interno del servidor"})
    }
}
module.exports = {
    obtenerPaginas,
    crearPagina,
    actualizarPagina,
    borrarPagina
}
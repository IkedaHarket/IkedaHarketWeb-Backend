const Imagen = require("../models/imagen");

const obtenerImagenes = async(req,res)=>{
    try {
        const imagenes = await Imagen.find();
        return res.status(200).json(imagenes)
    } catch (error) {
        console.log(error)
        return res.status(500).json({msg:"Error interno del servidor"})
    }
}
const crearImagen = async(req,res)=>{
    try {
        const {...data} = req.body;
        if (data.alt === '') data.alt = data.titulo
        const imagen = new Imagen({...data});
        await imagen.save();
        
        return res.status(201).json(imagen)
    } catch (error) {
        console.log(error)
        return res.status(500).json({msg:"Error interno del servidor"})
    }
}
const actualizarImagen = async(req,res)=>{
    try {
        const {id} = req.params;
        const {...data} = req.body;

        if (data.alt === '') data.alt = data.titulo;

        const imagen = await Imagen.findByIdAndUpdate(id,{...data},{new:true});

        return res.status(200).json(imagen)
    } catch (error) {
        console.log(error)
        return res.status(500).json({msg:"Error interno del servidor"});
    }
}
const borrarImagen = async(req,res)=>{
    try {
        const {id} = req.params;
        const imagen = await Imagen.findByIdAndDelete(id);
        res.status(200).json({imagen});
    } catch (error) {
        console.log(error)
        return res.status(500).json({msg:"Error interno del servidor"})
    }
}

module.exports = {
    obtenerImagenes,
    crearImagen,
    actualizarImagen,
    borrarImagen,
}

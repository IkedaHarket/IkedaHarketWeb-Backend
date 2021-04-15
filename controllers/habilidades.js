const Habilidad = require('../models/habilidad');

const obtenerHabilidades = async(req,res) =>{
    try {
        const habilidades = await Habilidad.find();
        return res.status(200).json(habilidades)
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok:false,
            msg:"Error interno del servidor"
        })
    }
}
const crearHabilidad = async(req,res) =>{
    try {
        const {nombre,color,porcentaje} = req.body;
        nombre.toUpperCase();
        if(porcentaje < 0 || porcentaje > 100){
            return res.status(400).json({
                ok:false,
                msg:"El porcentaje debe estar entre 0 y 100"
            })
        }
            
        const habilidad = new Habilidad({nombre,color,porcentaje});
        await habilidad.save();
        
        return res.status(201).json({
            ok:true,
            habilidad
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok:false,
            msg:"Error interno del servidor"
        })
    }
}
const actualizarHabilidad = async(req,res) =>{
    try {
        const {id} = req.params;
        const {nombre,color,porcentaje} = req.body;
        nombre.toUpperCase();
        if(porcentaje < 0 || porcentaje > 100){
            return res.status(400).json({
                ok:false,
                msg:"El porcentaje debe estar entre 0 y 100"
            })
        }
        const habilidad = await Habilidad.findByIdAndUpdate(id,{nombre,color,porcentaje},{new:true});

        return res.status(200).json({
            ok:true,
            habilidad
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok:false,
            msg:"Error interno del servidor"
        })
    }
}
const eliminarHabilidad = async(req,res) =>{
    try {
        const {id} = req.params;
        const habilidad = await Habilidad.findByIdAndDelete(id);
        res.status(200).json({
            ok:true,
            habilidad
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok:false,
            msg:"Error interno del servidor"
        })
    }
}

module.exports = {
    obtenerHabilidades,
    crearHabilidad,
    actualizarHabilidad,
    eliminarHabilidad,
}
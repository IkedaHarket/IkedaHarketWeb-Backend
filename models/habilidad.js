const {Schema, model} = require('mongoose');

const HabilidadSchema = Schema({
    color:{
        type:String,
        required:[true, 'El color es obligatorio'],
    },
    nombre:{
        type:String,
        required:[true, 'El nombre es obligatorio'],
        unique: true
    },
    porcentaje:{
        type:Number,
        required:[true, 'El porcentaje es obligatorio'],
    }
});

HabilidadSchema.methods.toJSON = function(){
    let {__v, ...habilidad} = this.toObject();
    return habilidad
}

module.exports = model('Habilidad',HabilidadSchema);
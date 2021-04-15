const {Schema, model} = require('mongoose');

const ImagenSchema = Schema({
    link:{
        type:String,
        required:[true, 'El link es obligatorio'],
    },
    titulo:{
        type:String,
        required:[true, 'El titulo es obligatorio'],
    },
    texto:{
        type:String,
        required:[true, 'El texto es obligatorio'],
    },
    alt:{
        type:String,
        default: 'imagen'
    },
    carrusel:{
        type:Boolean,
        default: false 
    }
});

ImagenSchema.methods.toJSON = function(){
    let {__v, ...imagen} = this.toObject();
    return imagen
}

module.exports = model('Imagen',ImagenSchema);
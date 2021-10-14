const {Schema, model} = require('mongoose');

const PaginasSchema = Schema({
    nombre:{
        type:String,
        required:[true, 'El nombre es obligatorio'],
    },
    descripcion:{
        type:String,
    },
    imagen:{
        type:String,
        required:[true, 'La imagen es obligatoria'],
    },
    enlace:{
        type:String,
        required:[true, 'El enlace es obligatorio']
    }
});

PaginasSchema.methods.toJSON = function(){
    let {__v, ...paginas} = this.toObject();
    return paginas
}

module.exports = model('Pagina',PaginasSchema);
const mongoose = require('mongoose');
const env = require('../config/env')
const dbConnection = async() =>{
    try{
        await mongoose.connect(env.mongodb_con, {
            useNewUrlParser: true,
            useUnifiedTopology:true,
            useCreateIndex:true,
            useFindAndModify:false
        });

        console.log('Base de datos online');

    }catch(error){
        console.log(error);
        throw new Error('Error al iniciar la BD');
    }
}

module.exports = {
    dbConnection
}
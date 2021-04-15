const mongoose = require('mongoose');
const conDB = 'mongodb+srv://userNodeCafe:sebaghost11@cluster0.cugwa.mongodb.net/ikedaharketweb'
const dbConnection = async() =>{
    try{
        await mongoose.connect(conDB, {
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
const express = require('express');
const cors = require('cors');

const { dbConnection } = require('../database/config');

class Server{
    
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.paths = {
            auth:       '/api/auth',
            habilidades:'/api/habilidades',
            imagenes:   '/api/imagenes',
        }
        this.conectarDB();
        this.middlewares();
        this.routes();
    }
    async conectarDB (){
        await dbConnection();
    }
    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'))
    }
    routes(){
        this.app.use(this.paths.auth,       require('../routes/auth'));
        this.app.use(this.paths.habilidades,require('../routes/habilidades'));
        this.app.use(this.paths.imagenes,   require('../routes/imagenes'));
    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log('Servidor corriendo en puerto: '+this.port);
        })
    }
}

module.exports = Server;
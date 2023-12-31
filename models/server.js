const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.userRoutePath = '/api/user'

        //Middlewares
        this.middlewares();

        //Rutas de mi app
        this.routes();
    }

    middlewares() {
        //CORS
        this.app.use(cors());

        //Lectura y parseo del body
        this.app.use(express.json());

        //Directorio publico
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.userRoutePath, require('../routes/user'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port)
        });
    }
}


module.exports = Server;
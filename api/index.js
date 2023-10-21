'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3977;

mongoose.Promise = global.Promise;
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://0.0.0.0:27017/rosario_snack').then( 
    res => {
        console.log(`La conexión a la base de datos está funcionando correctamente..`);  
        
        app.listen(port, function(){
            console.log('Servidor del api rest de proyecto final escuchando en http://localhost:' + port );
        })
    },
    err => console.error(`Ha habido un error: ${err}`),    
);


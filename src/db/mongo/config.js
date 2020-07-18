const mongoose = require('mongoose');

var stringConnection = "mongodb://172.17.0.3:27017/usersHome";

mongoose.connect(stringConnection, {useNewUrlParser: true, useUnifiedTopology : true});

mongoose.connection.on('error', (err)=>{
    console.log('falla al conectar con db');
});

mongoose.connection.once('open', ()=>{
    console.log('db open');
})

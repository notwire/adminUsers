const morgan = require('morgan');
const loginController = require('./routes/login/loginController');
const deviceController = require('./routes/device/deviceController');
const roomController = require('./routes/room/roomController');

//inicializo mongodb
require('./db/mongo/config');

//arranco express
const express = require('express');
const app = express();

app.use(express.json());
app.use(morgan('dev'));

//ruteo
app.use('/login', loginController);
app.use('/room', roomController);
app.use('/device', deviceController);

app.listen(3000, ()=>{
    console.log('server on port 3000');
})

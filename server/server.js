const express = require('express');
// 1. Importar el paquete de socketio
const socketIO = require('socket.io');
// 2. Importar el paquete de http para usarlo con socketio
const http = require('http')
const path = require('path');

const app = express();
// 3. Crear un nuevo servidor http en vez del que usa express. Express esta basado en el paquete http.
// 3. Le pasamos la app de express al servidor.
let server = http.createServer(app)

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// 4. IO = esta es la comunicación del backend. Con 'io' podremos disparar eventos, ver usuarios conectados, etc.
module.exports.io = socketIO(server)
require('./sockets/socket')

// 5. Como ya no estamos usando el servidor que usa express sino nuestro propio servidor,
// 5. renombramos app.listen(...) por server.listen(...)
server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});
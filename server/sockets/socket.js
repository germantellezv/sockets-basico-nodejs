const { io } = require('../server')


io.on('connection', (client) => {
  console.log('Usuario conectado');

  /* client.emit('enviarMensaje', {
      usuario: "Administrador",
      mensaje: "Bienvenido a esta aplicación"
  }) */

  client.on('disconnect', () => {
      console.log('Usuario desconectado');
  })

  // Escuchar al cliente

  client.on('enviarMensaje', (data, callback) => {
    client.broadcast.emit('enviarMensaje', data)
    console.log(data);
    
    /* 
    if (data.usuario) {
        callback({
            respuesta: 'Todo ok'
        })
    } else {
        callback({
            respuesta: 'Todo mal'
        })
    } 
    
    */
  })


})
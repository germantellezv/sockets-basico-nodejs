var socket = io()

// Escuchar evento de conexión
socket.on('connect', function () {
    console.log("Conectado al servidor");
})

// Escuchar eventos del servidor
socket.on('disconnect', function () {
    console.log('Perdimos conexión con el servidor');
})

socket.on('enviarMensaje', function (data) {
    console.log('Servidor:',data);
})

// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'German',
    mensaje: 'Hola mundo!'
}, function (resp) {
    console.log('Respuesta del servidor:', resp);
})



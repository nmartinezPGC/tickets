var socket = io();
socket.on("connect", function () {
  console.log("Cliente conectado");
});

socket.on("disconnect", function () {
  console.log("Se perdio la conecxion con el servidor");
});

// Enviar informacion
socket.emit(
  "message",
  {
    usuario: "Nahum",
    message: "Hola Mundo",
  },
  (resp) => {
    console.log("Resp server ", resp);
  }
);

// Listen server
socket.on("message", (resp) => {
  console.log("Servidor: ", resp);
});

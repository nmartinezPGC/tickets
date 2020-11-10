const { io } = require("../server");

io.on("connection", (client) => {
  console.log("Usuario conectado");
  client.emit("message", {
    usuario: "Admin",
    message: "Bienvenido a la APP",
  });

  client.on("disconnect", () => {
    console.log("Usuario desconectado");
  });

  // Listen client
  client.on("message", (data, callback) => {
    console.log(data);

    client.broadcast.emit("message", data);

    // if (msg.usuario) {
    //   callback({
    //     resp: "Todo bien",
    //   });
    // } else {
    //   callback({
    //     resp: "Todo mal",
    //   });
    // }
  });
});

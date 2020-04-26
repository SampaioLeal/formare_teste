const mongoose = require("mongoose");
const Messages = require("./controllers/Messages");
const store = require("./store");

const HOST = "localhost";
const DB = "chat_test";

async function init() {
  await mongoose
    .connect(`mongodb://${HOST}/${DB}?retryWrites=true&w=majority`, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })
    .then(() => {
      console.log("Conexão com o banco de dados OK!");
    })
    .catch((error) => console.log(error));
}

function initSocket() {
  const io = require("socket.io")(3001);
  io.on("connection", async (socket) => {
    console.log(socket.id, "connected");

    // Messages
    socket.emit("messages", await Messages.getAllMessages());
    socket.on("addMessage", async (message) => {
      await Messages.addMessage(message.content, message.author);
      io.emit("messages", await Messages.getAllMessages());
    });

    // Users
    socket.on("login", (user) => {
      socket.user = user;
      store.addUser(user);
      io.emit("newUser", store.users);
    });
    socket.on("disconnect", () => {
      store.removeUser(socket.user);
      io.emit("newUser", store.users);
    });
  });
}

init().then(() => {
  initSocket();
});

/* OBS:
Acredito que seria mais performático salvar as mensagens em um estado local (assim como no front), 
diminuindo a carga do servidor.

Mas para motivos de testes, puxarei as mensagens direto do banco sempre que uma nova for adicionada.
*/

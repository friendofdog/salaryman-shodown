const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const path = require("path");
require("dotenv").config();

const PORT = process.env.PORT || 8080;
const app = express();
const server = http.createServer(app);

const io = socketIo(server, {
  cors: {
    origin: "*",
  }
});

app.use(express.static(path.resolve(__dirname, "..", "build")));

app.get("/", (_, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

const players = new Set();
const gameInit = new Set();

io.on("connection", (socket) => {
  console.log("New client connected", socket.id);
  if (players.size < 2) {
    players.add(socket);
    socket.emit("confirm", players.size);
  } else {
    socket.emit("reject");
  }

  socket.on("disconnect", () => {
    console.log("Client disconnected");
    players.delete(socket);
    gameInit.delete(socket);
  });

  socket.on("setGameInit", (callback) => {
    console.log("setGameInit");
    gameInit.add(socket);
    callback(gameInit.size);
  });

  socket.on("state", (callback, data) => {
    io.sockets.emit("state", callback, data);
  });
});

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));

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
  });

  socket.on("setCreation", data => {
    console.log("setCreation", data);
    io.sockets.emit("setCreation", data);
  });

  socket.on("setRedistribute", data => {
    console.log("setRedistribute", data);
    io.sockets.emit("setRedistribute", data);
  });

  socket.on("setRoundWinner", data => {
    console.log("setRoundWinner", data);
    io.sockets.emit("setRoundWinner", data);
  });

  socket.on("setRound", data => {
    console.log("setRound", data);
    io.sockets.emit("setRound", data);
  });

  socket.on("setPlayer1", data => {
    console.log("setPlayer1", data);
    io.sockets.emit("setPlayer1", data);
  });

  socket.on("setPlayer2", data => {
    console.log("setPlayer2", data);
    io.sockets.emit("setPlayer2", data);
  });

  socket.on("setGameover", data => {
    console.log("setGameover", data);
    io.sockets.emit("setGameover", data);
  });
});

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));

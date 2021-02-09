const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const path = require("path");
require("dotenv").config();

const SERVER_PORT = process.env.REACT_APP_PORT || 8080;
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
  // if (players.size < 2) {
  //   players.add(socket);
  //   socket.emit("confirm");
  // } else {
  //   socket.emit("reject");
  // }
  socket.emit("confirm");

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
});

server.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));

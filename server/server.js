const express = require("express");

let Player = require("./Player");

const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
console.log('The server is now running at http://localhost/');
app.use(express.static("public"));

let players = [];

setInterval(updateGame, 16);

io.on("connection", socket => {
  console.log(`New connection ${socket.id}`);
  players.push(new Player(socket.id));

  socket.on("disconnect", () => {
    socket.disconnect();
    players = players.filter(player => player.id !== socket.id);
    console.log(`Disconnected ${socket.id}`);
  });
});

function updateGame() {
  io.emit("heartbeat", players);
}

server.listen(80);



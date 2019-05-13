const socket = io.connect('http://localhost');

let players = [];

socket.on("heartbeat", players => updatePlayers(players));
socket.on("disconnect", playerId => removePlayer(playerId));


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  players.forEach(player => player.draw());
}

function updatePlayers(serverPlayers) {
  for (let i = 0; i < serverPlayers.length; i++) {
    let playerFromServer = serverPlayers[i];
    if (!playerExists(playerFromServer)) {
      players.push(new Player(playerFromServer));
    }
  }
}

function playerExists(playerFromServer) {
  for (let i = 0; i < players.length; i++) {
    if (players[i].id === playerFromServer) {
      return true;
    }
  }
  return false;
}

function removePlayer(playerId) {
  players = players.filter(player => player.id !== playerId);
}

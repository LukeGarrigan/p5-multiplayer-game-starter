const socket = io.connect('http://localhost');

let players = [];

socket.on("heartbeat", players => updateGame(players));


socket.on("disconnect", playerId => removePlayer(playerId));
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  players.forEach(player => player.draw());
}


function updateGame(serverPlayers) {

  for (let i = 0; i < serverPlayers.length; i++) {

    let exists = false;
    for (let j = 0; j < players.length; j++) {
      if (serverPlayers[i].id === players[j].id) {
        exists = true;
      }
    }

    if (!exists) {
      players.push(new Player(serverPlayers[i]));
    }

  }
}



function removePlayer(playerId) {
  console.log(playerId + "STAPP");
  players = players.filter(player => player.id !== playerId);
}

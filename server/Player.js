class Player {
  constructor(id) {
    this.x = Math.random() * 400 + 1;
    this.y = Math.random() * 400 + 1;
    this.id = id;
  }

}

module.exports = Player;
class Player {
  constructor(player) {
    this.x = player.x;
    this.y = player.y;
    this.id = player.id;
  }


  draw() {
    circle(this.x, this.y, 20);
  }

}
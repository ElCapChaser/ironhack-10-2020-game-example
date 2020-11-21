class Bullet {
  constructor (game, x, y) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.width = 20;
  }

  runLogic () {
    this.x += 3;
  }

  draw () {
    this.game.context.fillStyle = 'red';
    this.game.context.fillRect(
      this.x,
      this.y,
      this.width,
      5
    );
  }
}
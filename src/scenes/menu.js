import { Scene } from '../scene'

export class Menu extends Scene {
  constructor(game) {
    super(game);
  }

  init() {
    super.init();
  }

  render(time) {
    this.game.canvas.drawImage('title', 0, 0);
    super.render(time);
  }
}
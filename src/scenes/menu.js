import { Scene } from '../scene'
import { Game } from '../game';

export class Menu extends Scene {
  constructor(game) {
    super(game);

    this.canvas = this.game.canvas;
    this.keyboard = this.game.keyboard;
  }

  init() {
    super.init();
  }

  render(time) {
    this.canvas.drawImage('title', 0, 0);
    this.canvas.print('Press ENTER', 220, 500);
    super.render(time);
  }

  listenEvents() {
    if(this.keyboard.enter) {
      this.finish(Game.events.level_1);
    }
  }
}
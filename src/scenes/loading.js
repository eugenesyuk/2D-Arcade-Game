import { Scene } from '../scene';
import { Game } from '../game';

export class Loading extends Scene {
  constructor(game) {
    super(game);
  }

  render(time) {
    this.game.canvas.fill('#666666');
    this.game.canvas.print('Loading...', 245, 320);
    super.render(time);
  }

  listenEvents(time) {
    this.game.canvas.imagesLoaded && time > 1000 ? this.finish(Game.events.menu) : 0;
  }
}
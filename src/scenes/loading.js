import { Scene } from '../scene';

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
    if(this.game.canvas.imagesLoaded && time > 1000) {
      this.nextScene = this.game.scenes.menu;
      this.finish();
    }
  }
}
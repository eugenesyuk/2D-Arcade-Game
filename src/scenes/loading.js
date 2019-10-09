import { Scene } from '../scene';

export class Loading extends Scene {
  constructor(game) {
    super(game);
  }

  init() {
    super.init();
  }

  sceneFinished(time) {
    this.game.canvas.imagesLoaded && time > 1000 ? this.finish(this.game.scenes.menu) : 0;
  }

  render(time) {
    this.sceneFinished(time);
    this.game.canvas.fill('#666666');
    this.game.canvas.print('Loading...', 245, 320);
    super.render(time);
  }
}
import { Scene } from '../scene';

export class Loading extends Scene {
  constructor(game) {
    super(game);
  }

  init() {
    super.init();
  }

  listenFinish(time) {
    time > 1000 ? this.finish(Scene.LOADED) : 0;
    // this.game.canvas.imagesLoaded ? this.finish(Scene.LOADED) : 0;
  }

  render(time) {
    this.listenFinish(time);
    this.game.canvas.fill('#666666');
    this.game.canvas.print('Loading...', 245, 320);
    super.render(time);
  }
}
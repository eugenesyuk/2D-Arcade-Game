import { Scene } from "../scene";

export class Level_1 extends Scene {
  constructor(game) {
    super(game);
  }

  render(time) {
    this.game.canvas.fill('#efefef');
    super.render(time);
  }
}
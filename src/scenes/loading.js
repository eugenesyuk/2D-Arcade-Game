import { Scene } from '../scene';

export class Loading extends Scene {
  constructor(game) {
    super(game);
    this.nextScene = 'menu';

    game.canvas.element.addEventListener('click', _ => this.finish());
  }

  render(time) {
    this.game.canvas.fill('green');
    super.render(time);
  }
}
import { Scene } from '../scene'

export class Menu extends Scene {
  constructor(game) {
    super(game);

    this.nextScene = 'loading';
    game.canvas.element.addEventListener('click', _ => this.finish());
  }

  render(time) {
    this.game.canvas.fill('yellow');
    super.render(time);
  }
}
import { Scene } from '../scene'

export class Menu extends Scene {
  constructor(game) {
    super(game);
  }

  init() {
    super.init();
  }

  static get statuses() {
    return {
      ...Scene.statuses,
      start_game: 'start_game'
    }
  }

  render(time) {
    this.game.canvas.drawImage('title', 0, 0);
    super.render(time);
  }
}
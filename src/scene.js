export class Scene {
  constructor(game) {
    this.game = game;
  }

  init() {
    this.active = true;
  }
  
  finish() {
    this.active = false; 
  }

  render(time) {}
  
}
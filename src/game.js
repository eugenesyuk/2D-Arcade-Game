import { Canvas } from './canvas';
import { Loading } from './scenes/loading';
import { Menu } from './scenes/menu';

export class Game {
  constructor() {
    this.canvas = new Canvas(480, 480);
    this.scenes = {
      loading: new Loading(this),
      menu: new Menu(this)
    };
  }

  frame(time) {
    if(!this.currentScene.active) {
      this.currentScene = this.scenes[this.currentScene.nextScene];
      this.currentScene.init();
    }
    this.currentScene.render(time);
    requestAnimationFrame(time => this.frame(time));
  }

  start() {
    this.currentScene = this.scenes.loading;
    this.currentScene.init();
    requestAnimationFrame(time => this.frame(time));
  }
}
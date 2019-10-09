import { Canvas } from './canvas';
import { Loading } from './scenes/loading';
import { Menu } from './scenes/menu';
import { Scene } from './scene';

export class Game {
  constructor(args = {}) {
    const width = args.width || 640;
    const height = args.height || 640;
  
    this.canvas = new Canvas(width, height);
    this.canvas.loadImages({
      orc: './img/orc.png',
      player: './img/player.png',
      title: './img/title.jpg', 
      tiles: './img/tiles.png'
    });

    this.scenes = {
      loading: new Loading(this),
      menu: new Menu(this)
    };
  }

  switchScene(status) {
    switch(status) {
      case Scene.LOADED:
        return this.scenes.menu;
      default:
        return this.scenes.menu;
    }
  }

  frame(time) {
    if(this.currentScene.status != Scene.WORKING) {
      this.currentScene = this.switchScene(this.currentScene.status);
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
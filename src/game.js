import { Canvas } from './canvas';
import { Keyboard } from './keyboard';
import { Scene } from './scene';
import { Loading } from './scenes/loading';
import { Menu } from './scenes/menu';
import { Level_1 } from './scenes/level_1';

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
  
    this.keyboard = new Keyboard();

    this.scenes = {
      loading: new Loading(this),
      menu: new Menu(this),
      level_1: new Level_1(this)
    }
  }

  frame(time) {
    if(this.currentScene.status === Scene.statuses.finished) {
      this.currentScene = this.nextScene;
      this.currentScene.start();
    }

    this.currentScene.render(time);
    this.currentScene.listenEvents(time);
    this.currentScene.update(time);
  
    requestAnimationFrame(time => this.frame(time));
  }

  start() {
    this.currentScene = this.scenes.loading;
    this.currentScene.start();
    requestAnimationFrame(time => this.frame(time));
  }
}
import { Canvas } from './canvas';
import { Loading } from './scenes/loading';
import { Menu } from './scenes/menu';
import { Scene } from './scene';
import { Keyboard } from './keyboard';
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
  }

  get scenes() {
    return {
      loading: new Loading(this),
      menu: new Menu(this),
      level_1: new Level_1(this)
    };
  }

  static get events() {
    return {
      game_start: 'game_start',
      game_over: 'game_over',
      menu: 'menu',
      level_1: 'level_1'
    };
  }

  switchScene() {
    switch (this.currentScene.nextScene) {
      case this.constructor.events.menu:
        return this.scenes.menu;
      case this.constructor.events.level_1:
        return this.scenes.level_1;
    }
  }

  frame(time) {
    if(this.currentScene.status === Scene.statuses.finished) {
      this.currentScene = this.switchScene();
      this.currentScene.start();
    }

    this.currentScene.render(time);
    this.currentScene.listenEvents(time);
  
    requestAnimationFrame(time => this.frame(time));
  }

  start() {
    this.currentScene = this.scenes.loading;
    this.currentScene.start();
    requestAnimationFrame(time => this.frame(time));
  }
}
export class Scene {
  constructor(game) {
    this.game = game;
    this.status = this.constructor.statuses.waiting;
  }

  static get statuses()  { 
    return {
      waiting: 'waiting', 
      started: 'started', 
      finished: 'finished'
    };
  }

  init() {
    this.status = this.constructor.statuses.waiting;
  }
  
  start() {
    this.status = this.constructor.statuses.started;
  }

  finish(nextScene) {
    this.status = this.constructor.statuses.finished;
    this.nextScene = nextScene;
  }

  render(time) {}

  listenEvents(time) {}
}
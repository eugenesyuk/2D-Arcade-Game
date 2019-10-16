import { Tile } from "./tile";

export class Animation extends Tile {
  constructor({imageName, frames, speed, repeat = true, autorun = true, width = 64, height = 64 }) {
    super({
      imageName: imageName,
      tileX: frames[0].tileX,
      tileY: frames[0].tileY,
      width: width,
      height: height
    });
    
    this.frames = frames;
    this.speed = speed;
    this.repeat = repeat;
    this.run = autorun;
    this.prevTime = 0;
    this.currentFrame = 0;
    this.framesCount = frames.length;
  }

  setFrame(index) {
    this.currentFrame = index;
    this.tileX = this.frames[index].tileX;
    this.tileY = this.frames[index].tileY;
  }

  start() {
    this.setFrame(0);
    this.run = true;
  }

  stop() {
    this.run = false;
  }

  nextFrame() {
    if((this.currentFrame + 1) === this.framesCount) {
      this.repeat ? this.setFrame(0) : this.stop();
    } else {
      this.setFrame(this.currentFrame + 1);
    }
  }

  update(time) {
    if(!this.run) return;
    if(this.prevTime === 0) {
      this.prevTime = time;
      return;
    }
    if((time - this.prevTime) > this.speed) {
      this.nextFrame();
      this.prevTime += this.speed;
    }
  }
}
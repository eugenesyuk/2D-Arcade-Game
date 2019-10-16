import { Tile } from "./tile";
import { Animation } from "./animation";

export class Sprite {
    constructor({imageName, imageWidth, imageHeight, spriteWidth = 64, spriteHeight = 64}) {
      this.imageName = imageName;
      this.imageWidth = imageWidth;
      this.imageHeight = imageHeight;
      this.spriteWidth = spriteWidth;
      this.spriteHeight = spriteHeight;
    }
  
    getTile(index) {
      return new Tile({
        imageName: this.imageName,
        tileX: this.getTileX(index),
        tileY: this.getTileY(index),
        width: this.spriteWidth,
        height: this.spriteHeight
      });
    }
    
    getAnimation(indexes, speed, repeat, autorun) {
      return new Animation({
        imageName: this.imageName,
        frames: indexes.map(i => ({tileX: this.getTileX(i), tileY: this.getTileY(i)})),
        speed: speed,
        repeat: repeat,
        autorun: autorun,
        width: this.spriteWidth,
        height: this.spriteHeight
      });
    }
  
    getTileX(index) {
      return (--index * this.spriteWidth) % this.imageWidth;
    }

    getTileY(index) {
      return Math.trunc((--index * this.spriteWidth) / this.imageWidth) * this.spriteHeight;
    }
}
export class Tile {
  constructor({imageName, tileX, tileY, width = 64, height = 64}) {
    this.imageName = imageName;
    this.tileX = tileX;
    this.tileY = tileY;
    this.width = width;
    this.height = height;
    this.canvasX = 0;
    this.canvasY = 0;
  }

  setPosition(x, y) {
    this.canvasX = x;
    this.canvasY = y;
  }
}
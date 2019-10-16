import { Scene } from "../scene";
import { Sprite } from "../sprite";

export class Level_1 extends Scene {
  constructor(game) {
    super(game);

    this.landscapeTiles = new Sprite({
      imageName: 'tiles',
      imageWidth: 640,
      imageHeight: 640
    })

    this.orcTiles = new Sprite({
      imageName: 'orc',
      imageWidth: 832,
      imageHeight: 1344
    });
  
    this.tree = this.landscapeTiles.getTile(7);
    this.tree.setPosition(10, 10);

    this.sand = this.landscapeTiles.getTile(22);
    this.sand.setPosition(300, 400);

    this.orc = this.orcTiles.getAnimation([1,2,3,4,5,6,7], 150);
    this.orc.setPosition(50,50);
  }

  render(time) {
    super.render(time);
    this.game.canvas.fill('#efefef');
    this.game.canvas.drawTile(this.sand);
    this.game.canvas.drawTile(this.tree);
    this.game.canvas.drawTile(this.orc);
  }

  update(time) {
    super.update(time);
    this.orc.update(time);
  }
}
import { Scene } from "../scene";
import { SpriteSheet } from "../sprite-sheet";

export class Level_1 extends Scene {
  constructor(game) {
    super(game);

    this.tiles = new SpriteSheet({
      imageName: 'tiles',
      imageWidth: 640,
      imageHeight: 640
    })

    this.tree = this.tiles.getSprite(7);
    this.tree.setCoordinates(10, 10);

    this.sand = this.tiles.getSprite(22);
    this.sand.setCoordinates(300, 400);
  }

  render(time) {
    this.game.canvas.fill('#efefef');
    this.game.canvas.drawSprite(this.sand);
    this.game.canvas.drawSprite(this.tree);
    super.render(time);
  }
}
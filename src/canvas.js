import { ImageLoader } from "./image_loader";

export class Canvas {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.element = this.initCanvas();
    this.setDimentions(this.width, this.height);
    this.context = this.getContext();
    this.images = {};
    this.imagesLoaded = false;
  }

  initCanvas() {
    let canvas = document.body.querySelector('canvas');
  
    if(!canvas) {
      canvas = document.createElement('canvas');
      document.body.appendChild(canvas);
    }
  
    return canvas;
  }

  setDimentions(width, height) {
    this.element.width = width;
    this.element.height = height;
  }

  getContext() {
    return this.element.getContext('2d');
  }

  loadImages(images) {
    const loader = new ImageLoader(images);
    loader.load().then(names => {
      this.images = Object.assign(this.images, loader.images);
      this.imagesLoaded = true;
    })
  }

  fill(color) {
    this.context.fillStyle = color;
    this.context.fillRect(0, 0, this.width, this.height);
  }

  print(str, x, y) {
    this.context.fillStyle = '#ffffff';
    this.context.font = '32px Arial';
    this.context.fillText(str, x, y); 
  }

  drawImage(image, x, y) {
    this.context.drawImage(this.images[image], x, y);
  }
}
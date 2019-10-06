export class Canvas {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.element = this.initCanvas();
    this.setDimentions(this.width, this.height);
    this.context = this.getContext();
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

  fill(color) {
    this.context.fillStyle = color;
    this.context.fillRect(0,0,this.width, this.height);
  }
}
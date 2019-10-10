export class Keyboard {
  constructor() {
    this.left = false;
    this.up = false;
    this.right = false;
    this.down = false;
    this.enter = false;

    this.keys = new Map([
      [37, 'left'], [38, 'up'], [39, 'right'], [40, 'down'], [13, 'enter']
    ]);

    document.addEventListener('keydown', (event) => this.update(event, true));
    document.addEventListener('keyup', (event) => this.update(event, false));
  }

  update(event, down) {
    const key = event.keyCode;
  
    if(this.keys.has(key)) {
      event.preventDefault();
      event.stopPropagation();
      this[this.keys.get(key)] = down;
    }
  }
}
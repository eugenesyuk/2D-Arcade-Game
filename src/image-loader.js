export class ImageLoader {
  constructor(imgFiles) {
    this.imgFiles = imgFiles;
    this.images = {};
  }

  load() {
    const promises = [];
    for (let name in this.imgFiles) {
      promises.push(this.loadImage(name, this.imgFiles[name]));
    }
    return Promise.all(promises);
  }

  loadImage(name, src) {
    return new Promise(resolve => {
      const image = new Image();
      this.images[name] = image;
      image.onload = () => resolve(name);
      image.src = src;
    });
  }
}
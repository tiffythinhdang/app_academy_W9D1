import Level from "./level";

// const Level = require("./level");

export default class FlappyBird {
  constructor(canvas){
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
  }

  animate() {
    this.animate(level);
  }

  restart() {
    let dimen = this.dimensions;
    this.level = new Level(dimen);
    this.animate();
  }
}


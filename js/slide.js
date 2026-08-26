export default class Slide {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
  }

  onStart(e) {
    e.preventDefault();
    console.log("mousedown");
    this.wrapper.addEventListener("mousemove", this.onMove);
  }

  onMove(e) {
    console.log(this.slide);
  }

  onEnd(e) {
    console.log("soltou o mouse");
    this.wrapper.removeEventListener("mousemove", this.onMove);
  }

  addSlideEvents() {
    this.wrapper.addEventListener("mousedown", this.onStart);
    this.wrapper.addEventListener("mouseup", this.onEnd);
  }

  bindEvents() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
  }

  init() {
    if (this.slide && this.wrapper) {
      this.bindEvents();
      this.addSlideEvents();
    }
    return this;
  }
}

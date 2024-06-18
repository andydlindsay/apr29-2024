class Rectangle {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }

  area() {
    return this.width * this.length;
  }
}

// const rectangle = new Rectangle(2, 3);

// console.log(rectangle);
// console.log(rectangle.area());

// const Prism = class extends Rectangle {};
class Prism extends Rectangle {
  constructor(width, length, height) {
    super(width, length); // calling the parent's constructor
    this.height = height;

    this.volume = this.volume.bind(this);
  }

  volume() {
    // console.log('this', this);
    return this.area() * this.height;
  }

  area() {
    return 42;
  }
}

const prism = new Prism(2, 3, 5);

console.log(prism);
console.log(prism.area()); // 6 or 42 ???

// const volume = prism.volume;

// console.log(volume());

class Shape {
  constructor(sides = []) {
    this.sides = sides;
  }

  perimeter = () => this.sides.reduce((acc, curr) => acc + curr, 0);
}
// console.log(new Shape([5, 10]).perimeter());  // 15
// console.log(new Shape([1, 2, 3, 4, 5]).perimeter()); // 15
// console.log(new Shape().perimeter()); // 0

class Rectangle extends Shape {
  constructor(length = 0, width = 0) {
    super([length, width, length, width]);
    this.length = length;
    this.width = width;
  }

  area = () => this.length * this.width;
}
// console.log(new Rectangle(4, 4).perimeter());  // 16
// console.log(new Rectangle(4, 4).area());  // 16
// console.log(new Rectangle(5, 5).perimeter()); // 20
// console.log(new Rectangle(5, 5).area()); // 25
// console.log(new Rectangle().perimeter()); // 0
// console.log(new Rectangle().area()); // 0

class Triangle extends Shape {
  constructor(sideA = 0, sideB = 0, sideC = 0) {
    super([sideA, sideB, sideC]);
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }

  area = () => {
    const s = (this.sideA + this.sideB + this.sideC)/2;
    return Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
  };
}
// console.log(new Triangle(3, 4, 5).perimeter());  // 12
// console.log(new Triangle(3, 4, 5).area());  // 6
// console.log(new Triangle().perimeter()); // 0
// console.log(new Triangle().area()); // 0

class Square extends Shape {
  constructor(side = 0) {
    super([side, side, side, side]);
    this.side = side;
  }

  area = () => this.side * this.side;
}

// Array of sides arrays
const data = [[3, 4], [5, 5], [3, 4, 5], [10], []];

for (let sides of data) {
  let shape = null;
  let shapeType = '';

  switch (sides.length) {
    case 2:
      if (sides[0] === sides[1]) {
        shape = new Square(...sides);
        shapeType = 'Square';
      } else {
        shape = new Rectangle(...sides);
        shapeType = 'Rectangle';
      }
      console.log(`${shapeType} with sides ${sides.toString()} has perimeter ${shape.perimeter()} and area of ${shape.area()}`);
      break;

    case 3:
      shape = new Triangle(...sides);
      console.log(`Triangle with sides ${sides.toString()} has perimeter ${shape.perimeter()} and area of ${shape.area()}`);
      break;

    default:
      console.log(`Shape with ${sides.length} sides unsupported`);
      break;
  }
}


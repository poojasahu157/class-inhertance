// import using require



// declare class

class Shape {
  constructor(color) {
    this.color = color;
  }
  calculateArea() {console.log("calculateArea")}

  drawShape() {}
}

// Shape.color = '...' //! Static properties

module.exports = Shape;
// export class using module.exports

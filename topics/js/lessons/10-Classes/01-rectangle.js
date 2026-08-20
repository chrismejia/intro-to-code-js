/**
 * Define the class `Rectangle`.
 * `Rectangle` accepts two number inputs which for its width, and height properties, respectively.
 * `Rectangle` has two instance methods, `area`, and `perimeter`.
 * When called on an instance of `Rectangle`, `area` returns the area of that `Rectangle` instance using its `width` and `height`.
 * Similarly, when `perimeter` is called, it returns the perimeter of that instance of `Rectangle`.
 *
 * @class Rectangle
 * @example
 * const myRectangle = new Rectangle(5, 6)
 * myRectangle.width        // => 5
 * myRectangle.height       // => 6
 * myRectangle.area()       // => 30
 * myRectangle.perimeter()  // => 22
 */
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }

  perimeter() {
    return 2 * this.width + 2 * this.height;
  }
}

export default Rectangle;

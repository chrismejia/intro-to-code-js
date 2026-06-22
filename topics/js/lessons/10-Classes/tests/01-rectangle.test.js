import Rectangle from "../01-rectangle.js";

describe("#1: Rectangle", () => {
  let myRect, mySquare;

  beforeAll(() => {
    myRect = new Rectangle(5, 6);
    mySquare = new Rectangle(10, 10);
  });

  it("is a class", () => {
    expect(myRect instanceof Rectangle).toBe(true);
    expect(mySquare instanceof Rectangle).toBe(true);
  });

  it("has the property `width`", () => {
    expect(myRect).toHaveProperty("width");
    expect(mySquare).toHaveProperty("width");
  });

  it("has the property `height`", () => {
    expect(myRect).toHaveProperty("height");
    expect(mySquare).toHaveProperty("height");
  });

  it("accepts two number inputs for its length and width", () => {
    expect(myRect.width).toBe(5);
    expect(myRect.height).toBe(6);

    expect(mySquare.width).toBe(10);
    expect(mySquare.height).toBe(10);
  });

  it("has the instance method `area`", () => {
    expect(typeof myRect.area).toBe("function");
    expect(typeof mySquare.area).toBe("function");
  });

  it("has the instance method `perimeter`", () => {
    expect(typeof myRect.perimeter).toBe("function");
    expect(typeof mySquare.perimeter).toBe("function");
  });

  it("the instance method `area` correctly returns the area of the rectangle", () => {
    expect(myRect.area()).toBe(30);
    expect(mySquare.area()).toBe(100);
  });

  it("the instance method `perimeter` correctly returns the area of the rectangle", () => {
    expect(myRect.perimeter()).toBe(22);
    expect(mySquare.perimeter()).toBe(40);
  });
});

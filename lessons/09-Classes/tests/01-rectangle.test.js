import { expect } from "chai";
import Rectangle from "../01-rectangle";

describe("#1: Rectangle", () => {
  let myRect, mySquare;

  before(() => {
    myRect = new Rectangle(5, 6);
    mySquare = new Rectangle(10, 10);
  });

  it("is a class", () => {
    expect(myRect instanceof Rectangle).to.be.true;
    expect(mySquare instanceof Rectangle).to.be.true;
  });

  it("has the property `width`", () => {
    expect(myRect).to.have.property("width");
    expect(mySquare).to.have.property("width");
  });

  it("has the property `height`", () => {
    expect(myRect).to.have.property("height");
    expect(mySquare).to.have.property("height");
  });

  it("accepts two number inputs for its length and width", () => {
    expect(myRect.width).to.equal(5);
    expect(myRect.height).to.equal(6);

    expect(mySquare.width).to.equal(10);
    expect(mySquare.height).to.equal(10);
  });

  it("has the instance method `area`", () => {
    expect(myRect.area).to.be.a("function");
    expect(mySquare.area).to.be.a("function");
  });

  it("has the instance method `perimeter`", () => {
    expect(myRect.perimeter).to.be.a("function");
    expect(mySquare.perimeter).to.be.a("function");
  });

  it("the instance method `area` correctly returns the area of the rectangle", () => {
    expect(myRect.area()).to.equal(30);
    expect(mySquare.area()).to.equal(100);
  });

  it("the instance method `perimeter` correctly returns the area of the rectangle", () => {
    expect(myRect.perimeter()).to.equal(22);
    expect(mySquare.perimeter()).to.equal(40);
  });
});

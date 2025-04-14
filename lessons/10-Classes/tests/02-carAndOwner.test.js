import { expect } from "chai";
import sinon from "sinon";
import { Car, Owner } from "../02-carAndOwner";

describe("#2: Car and Owner", () => {
  let myCar, myOwner;

  before(() => {
    myCar = new Car(2008, "Subaru", "Forester", 155000);
    myOwner = new Owner("John Doe");
  });

  describe("Car", () => {
    it("is a class", () => {
      expect(myCar instanceof Car).to.be.true;
    });

    it("has the number property `year`", () => {
      expect(myCar).to.have.property("year");
      expect(myCar.year).to.be.a("number");
    });

    it("has the string property `make`", () => {
      expect(myCar).to.have.property("make");
      expect(myCar.make).to.be.a("string");
    });

    it("has the string property `model`", () => {
      expect(myCar).to.have.property("model");
      expect(myCar.model).to.be.a("string");
    });

    it("has the number property `miles`", () => {
      expect(myCar).to.have.property("miles");
      expect(myCar.miles).to.be.a("number");
    });

    describe("the instance method `details`", () => {
      it("is a function", () => {
        expect(myCar.details).to.be.a("function");
      });

      it("returns the correct string", () => {
        let result = myCar.details();
        expect(result)
          .to.be.a("string")
          .that.includes("2008 Subaru Forester @ 155000");
      });
    });
  });

  describe("Owner", () => {
    it("is a class", () => {
      expect(myOwner instanceof Owner).to.be.true;
    });

    it("is a subclass off of Car", () => {
      const result = Car.isPrototypeOf(myOwner);
      console.log(Car.isPrototypeOf(myOwner));
      console.log(Object.getPrototypeOf(Car));
      console.log(Object.getPrototypeOf(Car.prototype));
      expect(result).to.be.true;
    });

    describe("inherited properties and methods", () => {
      it("inherits `year`, `make`, `model`, `miles` from the Car class", () => {
        console.log(Car.prototype.isPrototypeOf(myOwner));

        // expect(myOwner.hasOwnProperty("year")).to.be.false;
        // expect(myOwner.hasOwnProperty("make")).to.be.false;
        // expect(myOwner.hasOwnProperty("model")).to.be.false;
        // expect(myOwner.hasOwnProperty("miles")).to.be.false;
      });
    });
  });
});

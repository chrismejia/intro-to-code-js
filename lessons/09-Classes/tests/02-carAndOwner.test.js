import { expect } from "chai";
import { Car, Owner } from "../02-carAndOwner";

describe("#2: Car and Owner", () => {
  let myCar, myOwner;

  before(() => {
    myCar = new Car(2008, "Subaru", "Forester", 155000);
    myOwner = new Owner(2008, "Subaru", "Forester", 155000, "John Doe");
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

    it("is a subclass of Car", () => {
      expect(Object.getPrototypeOf(Owner.prototype)).to.equal(Car.prototype);
      expect(myOwner instanceof Car).to.be.true;
    });

    describe("inherited properties and methods", () => {
      it("inherits `year`, `make`, `model`, `miles` from the Car class", () => {
        expect(myOwner.year).to.equal(2008);
        expect(myOwner.make).to.equal("Subaru");
        expect(myOwner.model).to.equal("Forester");
        expect(myOwner.miles).to.equal(155000);
        expect(myOwner.details()).to.include("2008 Subaru Forester @ 155000");
      });
    });
  });
});

import { Car, Owner } from "../02-carAndOwner.js";

describe("#2: Car and Owner", () => {
  let myCar, myOwner;

  beforeAll(() => {
    myCar = new Car(2008, "Subaru", "Forester", 155000);
    myOwner = new Owner(2008, "Subaru", "Forester", 155000, "John Doe");
  });

  describe("Car", () => {
    it("is a class", () => {
      expect(myCar instanceof Car).toBe(true);
    });

    it("has the number property `year`", () => {
      expect(myCar).toHaveProperty("year");
      expect(typeof myCar.year).toBe("number");
    });

    it("has the string property `make`", () => {
      expect(myCar).toHaveProperty("make");
      expect(typeof myCar.make).toBe("string");
    });

    it("has the string property `model`", () => {
      expect(myCar).toHaveProperty("model");
      expect(typeof myCar.model).toBe("string");
    });

    it("has the number property `miles`", () => {
      expect(myCar).toHaveProperty("miles");
      expect(typeof myCar.miles).toBe("number");
    });

    describe("the instance method `details`", () => {
      it("is a function", () => {
        expect(typeof myCar.details).toBe("function");
      });

      it("returns the correct string", () => {
        let result = myCar.details();
        expect(typeof result).toBe("string");
        expect(result).toContain("2008 Subaru Forester @ 155000");
      });
    });
  });

  describe("Owner", () => {
    it("is a class", () => {
      expect(myOwner instanceof Owner).toBe(true);
    });

    it("is a subclass of Car", () => {
      expect(Object.getPrototypeOf(Owner.prototype)).toBe(Car.prototype);
      expect(myOwner instanceof Car).toBe(true);
    });

    describe("inherited properties and methods", () => {
      it("inherits `year`, `make`, `model`, `miles` from the Car class", () => {
        expect(myOwner.year).toBe(2008);
        expect(myOwner.make).toBe("Subaru");
        expect(myOwner.model).toBe("Forester");
        expect(myOwner.miles).toBe(155000);
        expect(myOwner.details()).toContain("2008 Subaru Forester @ 155000");
      });
    });
  });
});

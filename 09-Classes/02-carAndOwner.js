class Car {
  constructor(year, make, model, miles) {
    this.year = year;
    this.make = make;
    this.model = model;
    this.miles = miles;
  }
}

class Owner extends Car {
  constructor(name) {
    this.name = name;
  }

  takeARoadtrip(tripMiles) {
    console.log(`${this.name} took a ${tripMiles} long road trip.`);
    this.miles += tripMiles;
    console.log(
      `Their ${this.year} ${this.make} ${this.model} now has ${this.miles} miles on it.`
    );
  }
}

export { Car, Owner };

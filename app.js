"use strict";

class Car {
  #make;
  #model;
  #run;

  constructor(make, model, run) {
    this.#make = make;
    this.#model = model;
    this.#run = Number(run);
  }

  set setRun(run) {
    this.#run += run;
  }

  get getRun() {
    return `Пробег - ${this.#run}`;
  }

  info() {
    return `${this.#make} - ${this.#model}. Пробег - ${this.#run}`;
  }
}

const kia = new Car("KIA", "Seltos", "55000");
console.log(kia.info());
kia.setRun = 100;
console.log(kia.getRun);
console.log(kia);

"use strict";

class Character {
  constructor(race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
  }

  talking() {
    console.log(`${this.name} - ${this.language}`);
  }
}

class Orc extends Character {
  constructor(race, name, language, weapon) {
    super(race, name, language);
    this.weapon = weapon;
  }
  hit() {
    console.log(`${this.name} наносит [Кровожадный удар]!`);
  }

  talking() {
    console.log(
      `${this.name} - ${this.language}: Заг - Заг! Я сын Орды! Мое оружие [${this.weapon}]!`
    );
  }
}

class Elf extends Character {
  spells = [];
  constructor(race, name, language) {
    super(race, name, language);
  }
  createSpell(name) {
    this.spells.push(name);
  }
  castSpell() {
    const random = Math.floor(Math.random() * (this.spells.length - 1));
    console.log(`${this.name} применяет заклинание [${this.spells[random]}]!`);
  }

  talking() {
    console.log(`${this.name} - ${this.language}: Анар-Ала! За Орду!`);
  }
}

// создание орка
const orc = new Orc("Orc", "Garrosh", "Orcish", "Axe");
orc.talking();
orc.hit();
console.log(orc);

// создание эльфа
const elf = new Elf("Elf", "Kel'Talas", "Elvish");
elf.talking();
elf.createSpell("Огненный шар");
elf.createSpell("Огненный щит");
elf.createSpell("Огненный меч");
elf.createSpell("Огненный луч");
elf.castSpell();
console.log(elf);

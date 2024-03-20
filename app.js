"use strict";

// персонаж
const Character = function (race, name, language) {
  this.race = race;
  this.name = name;
  this.language = language;
};

Character.prototype.talking = function () {
  console.log(`${this.name} - ${this.language}`);
};

// орк
const Orc = function (race, name, language, weapon) {
  Character.call(this, race, name, language);
  this.weapon = weapon;
};
Orc.prototype = Object.create(Character.prototype);
Orc.prototype.constructor = Orc;

Orc.prototype.hit = function () {
  console.log(`${this.name} наносит [Кровожадный удар]!`);
};

// эльф
const Elf = function (race, name, language) {
  Character.call(this, race, name, language);
  this.spells = [];
};
Elf.prototype = Object.create(Character.prototype);
Elf.prototype.constructor = Elf;

Elf.prototype.createSpell = function (name) {
  this.spells.push(name);
};

Elf.prototype.castSpell = function () {
  const random = Math.floor(Math.random() * (this.spells.length - 1));
  console.log(random);
  console.log(`${this.name} применяет заклинание [${this.spells[random]}]!`);
};

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

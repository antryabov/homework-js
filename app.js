"use strict";

function rollTheDice(dice) {
  let arrayDices = ["d4", "d6", "d8", "d10", "d12", "d14", "d16", "d20"];
  const findDice = arrayDices.find((el) => el === dice);

  if (findDice) {
    const numDice = Number(findDice.replace("d", ""));
    return Math.floor(Math.random() * (numDice - 1 + 1) + 1);
  }
  return null;
}

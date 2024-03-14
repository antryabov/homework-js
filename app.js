"use strict";

function rollTheDice(dice) {
  const dices = {
    d4: 4,
    d6: 6,
    d8: 8,
    d10: 10,
    d12: 12,
    d16: 16,
    d20: 20,
  };

  if (dices[dice]) {
    return Math.floor(Math.random() * (dices[dice] - 1 + 1) + 1);
  }
  return null;
}

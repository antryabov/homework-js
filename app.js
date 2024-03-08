"use strict";

const array = [
  {
    id: 1,
    name: "Вася",
  },
  {
    id: 2,
    name: "Петя",
  },
  {
    id: 1,
    name: "Вася",
  },
];

const set = new Set();

const find = array.find((el) => {
  return el.id === 1;
});

array.map((el) => {
  if (find !== el) {
    set.add(el);
  }
});

console.log(set);

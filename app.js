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

function deleteDiplicate(array) {
  const set = new Set();
  let newArray = [];

  array.map((el) => {
    if (!set.has(el.id)) {
      set.add(el.id);
      newArray.push(el);
    }
  });
  return newArray;
}

console.log(deleteDiplicate(array));

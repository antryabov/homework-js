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
  let newArray = [];

  array.map((el) => {
    if (!newArray.find((item) => item.id === el.id)) {
      newArray.push(el);
    }
  });

  return newArray;
}

console.log(deleteDiplicate(array));

"use strict";

function timerPizza(time) {
  const timer = new Date();
  let milliseconds = timer.getTime() - (timer.getTime() - time * 1000);
  let seconds = (milliseconds / 1000) % 60;
  let minute = (seconds / 60) % 60;
  console.log(minute);
  const intervalSecond = setInterval(() => {
    console.log(`0${minute}:0${++seconds}`);
  }, 1000);

  setTimeout(() => {
    clearInterval(intervalSecond);
  }, time * 1000);
}

console.log(timerPizza(120));

"use strict";

const timer = document.querySelector(".timer");

function isNewYear() {
  const end = new Date(2025, 0, 1, 0, 0, 0).getTime();
  const interval = setInterval(() => {
    const untilTheNY = new Date(end - new Date() - 10800000);
    let month = untilTheNY.getMonth();
    let days = untilTheNY.getDate();
    let hour = untilTheNY.getHours();
    let minute = untilTheNY.getMinutes();
    let seconds = untilTheNY.getSeconds();
    timer.innerHTML = `${month} месяцев ${days} дней ${hour} часов ${minute} минут ${seconds} секунд`;
  }, 1000);

  setTimeout(() => {
    clearInterval(interval);
  }, new Date(2025, 0, 1).getTime());
}

isNewYear();

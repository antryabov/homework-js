"use strict";

const user = {
  name: "Vasia",
  birthday: "02/11/2010", // 2 february 2010
};

function validateAge(user) {
  const dateBirhday = new Date(user.birthday);
  const now = new Date();
  const age = now.getFullYear() - dateBirhday.getFullYear();
  if (age > 14) return true;
  if (age === 14) {
    if (
      now.getMonth() - dateBirhday.getMonth() > 0 ||
      (now.getMonth() - dateBirhday.getMonth() === 0 &&
        now.getDate() - dateBirhday.getDate() >= 0)
    )
      return true;
  }
  return false;
}

console.log(validateAge(user));

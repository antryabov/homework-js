"use strict";

const user = {
  name: "Vasia",
  birthday: "06/25/2010",
};

function validateAge(user) {
  const dateBirhday = new Date(user.birthday);
  const now = new Date();
  const age = now.getFullYear() - dateBirhday.getFullYear();
  if (age > 14) return true;
  if (age === 14) {
    if (
      dateBirhday.getMonth() >= now.getMonth() &&
      dateBirhday.getDate() >= now.getDate()
    ) {
      return true;
    } else if (
      dateBirhday.getMonth() > now.getMonth() &&
      dateBirhday.getDate() <= now.getDate()
    ) {
      return true;
    }
  }

  return false;
}

console.log(validateAge(user));

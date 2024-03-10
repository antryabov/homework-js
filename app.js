"use strict";

const user = {
  name: "Vasia",
  birthday: "03/10/2010",
};

function validateAge(user) {
  const dateBirhday = new Date(user.birthday);
  const now = new Date();
  const age = now.getFullYear() - dateBirhday.getFullYear();
  console.log(age);
  if (age > 14) {
    return true;
  }
  if (age === 14) {
    if (dateBirhday.getMonth() >= now.getMonth()) {
      if (dateBirhday.getDate() >= now.getDate()) {
        return true;
      }
    }
  }
  return false;
}

console.log(validateAge(user));

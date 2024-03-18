"use strict";

const CartOfGoods = function () {
  this.goods = [];
  this.count = null;
};

// Доделать правильное обновление id после удаления
CartOfGoods.prototype.addGoods = function (name) {
  this.goods.push({
    id: this.goods.length + 1,
    name: name,
  });
  this.count = this.goods.length;
};

CartOfGoods.prototype.deleteGood = function (name) {
  const good = this.goods.find((good) => good.name === name);
  if (good) {
    this.goods.splice(good.id - 1, 1);

    this.count = this.goods.length;
  }
  if (this.goods.length === 0) {
    this.goods = [];
  }
};

const cart = new CartOfGoods();
cart.addGoods("Bear");
cart.addGoods("Chips");
cart.deleteGood("Bear");
console.log(cart);

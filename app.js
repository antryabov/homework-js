"use strict";

class Billing {
  amount;
  constructor(amount) {
    this.amount = amount;
  }
  calculateTotal() {
    return this.amount;
  }
}

class FixBilling extends Billing {
  amount;
}

class HourBilling extends Billing {
  amount;
  hour;
  constructor(amount, hour) {
    super(amount);
    this.hour = hour;
  }
  calculateTotal() {
    return this.amount * this.hour;
  }
}

class itemBilling extends Billing {
  amount;
  item;
  constructor(amount, item) {
    super(amount);
    this.item = item;
  }
  calculateTotal() {
    return this.amount * this.item;
  }
}

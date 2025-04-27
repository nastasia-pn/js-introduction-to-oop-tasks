// BEGIN
function Money(value, currency = 'usd') {
    this.value = value;
    this.currency = currency;
  }
  
  Money.prototype.getValue = function () {
    return this.value;
  };
  
  Money.prototype.getCurrency = function () {
    return this.currency;
  };
  
  Money.prototype.exchangeTo = function (currency) {
    const exchangeRates = {
      usd: { eur: 0.7 },
      eur: { usd: 1.2 },
    };
  
    if (this.currency === currency) {
      return new Money(this.value, this.currency);
    }
  
    const rate = exchangeRates[this.currency][currency];
    if (!rate) {
      throw new Error(`Cannot exchange from ${this.currency} to ${currency}`);
    }
  
    const newValue = this.value * rate;
    return new Money(newValue, currency);
  };
  
  Money.prototype.add = function (money) {
    if (this.currency !== money.getCurrency()) {
      money = money.exchangeTo(this.currency);
    }
  
    const newValue = this.value + money.getValue();
    return new Money(newValue, this.currency);
  };
  
    
  Money.prototype.format = function () {
    return this.value.toLocaleString(undefined, {
      style: 'currency',
      currency: this.currency,
    });
  };
  export default Money;
// END

// BEGIN
const make = (numer = 0, denom = 1) => {
    if (denom === 0) {
      throw new Error("Denominator cannot be zero");
    }
    return {
      numer, 
      denom, 
  
      setNumer(newNumer) {
        this.numer = newNumer;
      },
  
      setDenom(newDenom) {
        if (newDenom === 0) {
          throw new Error("Denominator cannot be zero");
        }
        this.denom = newDenom;
      },
  
      getNumer() {
        return this.numer;
      },
  
      getDenom() {
        return this.denom;
      },
  
      toString() {
        return `${this.numer}/${this.denom}`;
      },
  
      add(other) {
        const newNumer = this.numer * other.getDenom() + this.denom * other.getNumer();
        const newDenom = this.denom * other.getDenom();
        return make(newNumer, newDenom);
      },
    };
  };
  
  export default make;
// END
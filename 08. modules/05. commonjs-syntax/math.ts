function absolute(num: number) {
    if (num < 0) return num * -1;
    return num;
  }
  
  module.exports = {
    pi: 3.14,
    squareTwo: 1.41,
    phi: 1.61,
    absolute,
  };
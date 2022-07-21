const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
	let total = 0;
    arr.forEach( function (e) {
        total += e;
    });
  return total;
};

const multiply = function(arr) {
  let total = 1;
  arr.forEach( (e) => total *= e);
  return total;
};

const power = function(x,n) {
	let total = x;
  for (i=1; i<n; i++) { 
    total *= x
  }
  return total;
};

const factorial = function(n) {
	let arr = [];
  let total = 1;
  for (i=1; i<=n; i++) {
    arr.push(i);
  };
  arr.forEach( (e) => total *= e);
  return total;
};




// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

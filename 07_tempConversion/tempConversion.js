const ftoc = function(f) {
  let cels= (f-32)*(5/9);
  if (Number.isInteger(cels)) {
    return cels;
  } else {
    return Number((Math.round(cels * 10) / 10).toFixed(1));
  }
  
};

const ctof = function(c) {
  let far= (c*(9/5) ) +32;
  if (Number.isInteger(far)) {
    return far;
  } else {
    return Number((Math.round(far * 10) / 10).toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

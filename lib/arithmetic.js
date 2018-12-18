'use strict';

let arithmetic = module.exports = {};
const notNumber = (a,b) => {
  if( typeof a !== "number" || typeof b !== "number"){return true}
};

arithmetic.add = function(a,b) {
  if(notNumber(a,b)) { return null; }
  return a+b;
};

arithmetic.subtract = function (a,b) {
  if(notNumber(a,b)) { return null; }
  return a-b;
};

arithmetic.divide = function (a,b) {
  if (notNumber(a,b)) {return null;}
  return a/b;
};

arithmetic.multiply = function (a,b) {
  if (notNumber(a,b)) {return null;}
  return a*b
};

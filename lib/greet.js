'use strict';

const greet = (string) => {
  if (typeof(string) !== 'string'){
    return null;
  }
	
  return `hello ${string}`;
};

module.exports = greet;


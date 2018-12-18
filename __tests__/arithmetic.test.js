'use strict';

const faker = require('faker');

const arithmetic = require('../lib/arithmetic.js');

const arg1 = faker.random.number();
const arg2 = faker.random.number();

describe('testing add function', () => {
  test('it should add the two arguments passed', () => {
    expect(arithmetic.add(arg1,arg2)).toEqual(arg1 + arg2);
  });

  test('it should return null if a non integer value is given as an argument', () => {
    expect(arithmetic.add('string',arg2)).toEqual(null);
  });
});

describe('testing add function', () => {
  test('it should multiply the two arguments passed', () => {
    expect(arithmetic.multiply(arg1,arg2)).toEqual(arg1 * arg2);
  });

  test('it should return null if a non integer value is given as an argument', () => {
    expect(arithmetic.multiply('string',arg2)).toEqual(null);
  });
});

describe('testing add function', () => {
  test('it should divide the two arguments passed', () => {
    expect(arithmetic.divide(arg1,arg2)).toEqual(arg1 / arg2);
  });
    
  test('it should return null if a non integer value is given as an argument', () => {
    expect(arithmetic.divide('string',arg2)).toEqual(null);
  });
});

describe('testing add function', () => {
  test('it should subtract the two arguments passed', () => {
    expect(arithmetic.subtract(arg1,arg2)).toEqual(arg1 - arg2);
  });

  test('it should return null if a non integer value is given as an argument', () => {
    expect(arithmetic.subtract('string',arg2)).toEqual(null);
  });
});

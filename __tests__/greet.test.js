const greet = require('../lib/greet.js');

describe("testing greet function", () => {
    test("it should return a greeting of hello plus the argument passed to the function", () => {
        expect(greet("George")).toEqual("hello George");
    })

    test("it should return hello world", () => {
        expect(greet("world")).toEqual("hello world");
    })
});
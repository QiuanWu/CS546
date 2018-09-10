const geometry = require("./geometry");
const utilities = require("./utilities");

// geometry.js
console.log("geometry.volumeOfRectangularPrism:");
console.log(geometry.volumeOfRectangularPrism(3,4,5));
console.log(geometry.volumeOfRectangularPrism(15,20,30));
console.log(geometry.volumeOfRectangularPrism(1,1,"a"));
console.log(geometry.volumeOfRectangularPrism(1,0,3));
console.log(geometry.volumeOfRectangularPrism(-1,1,1));

console.log("geometry.surfaceAreaOfRectangularPrism:");
console.log(geometry.surfaceAreaOfRectangularPrism(3,4,5));
console.log(geometry.surfaceAreaOfRectangularPrism(15,20,30));
console.log(geometry.surfaceAreaOfRectangularPrism(1,1,"a"));
console.log(geometry.surfaceAreaOfRectangularPrism(1,0,3));
console.log(geometry.surfaceAreaOfRectangularPrism(-1,1,1));

console.log("geometry.volumeOfSphere:");
console.log(geometry.volumeOfSphere(1));
console.log(geometry.volumeOfSphere(100));
console.log(geometry.volumeOfSphere());
console.log(geometry.volumeOfSphere(-1));
console.log(geometry.volumeOfSphere("a"));

console.log("geometry.surfaceAreaOfSphere:");
console.log(geometry.surfaceAreaOfSphere(1));
console.log(geometry.surfaceAreaOfSphere(100));
console.log(geometry.surfaceAreaOfSphere());
console.log(geometry.surfaceAreaOfSphere(-1));
console.log(geometry.surfaceAreaOfSphere("a"));


//utilities.js
console.log("utilities.deepEquality:");
const first = {a: 2, b: 3};
const second = {a: 2, b: 4};
const third = {a: 2, b: 3};
console.log(utilities.deepEquality(first, second)); // false
console.log(utilities.deepEquality(first, third)); // true
console.log(utilities.deepEquality({a: 2 , 1 : d}));
console.log(utilities.deepEquality({1 : d, b :3}));
console.log(utilities.deepEquality({}));

console.log("utilities.uniqueElements:");
const testArr = ["a", "a", "b", "a", "b", "c"];
console.log(utilities.uniqueElements(testArr)); // outputs 3
console.log(utilities.uniqueElements([1,1,3,4,5,5,6]));
console.log(utilities.uniqueElements([]));
console.log(utilities.uniqueElements(1));
console.log(utilities.uniqueElements({1:b}));

console.log("utilities.countOfEachCharacterInString:");
const test = "Hello, the pie is in the oven";
console.log(utilities.countOfEachCharacterInString(test));
console.log(utilities.countOfEachCharacterInString(""));
console.log(utilities.countOfEachCharacterInString());
console.log(utilities.countOfEachCharacterInString(1));
console.log(utilities.countOfEachCharacterInString([]));

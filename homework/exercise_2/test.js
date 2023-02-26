'use strict';

const {sum, sub, mul, div} = require("./module.js");


// number, number
console.log(sum('10123', '1432'));
console.log(sub('45341', '1231'));
console.log(mul('1785', '2222'));
console.log(div('13', '23'));
console.log();

// bigint, bigint

console.log(sum('1000000000000000000000000000000000', '200000000000000000000000000000000000'));
console.log(sub('16928356982345698325683756823945634', '16928356982345698325683756823945634'));
console.log(mul('555555555555555555555555555555', '5555555555555555555555555555555555555'));
console.log(div('99999999999999999999999999999', '3333333333333333333333333333333333'));
console.log();

// number, bigint

console.log(sum('9', '200000000000000000000000000000000000'));
console.log(sub('0', '16928356982345698325683756823945634'));
console.log(mul('2', '256488888888888888888888888888888884564'));
console.log(div('3', '54635658468465656854642536546541684'));
console.log(div('54635658468465656854642536546541684', '3'));
console.log();

console.log(sum('sdfdsf', 'sdfsd'));
console.log(sub('sdfdsf', 'sdfsd'));
console.log(mul('sdfdsf', 'sdfsd'));
console.log(div('sdfdsf', 'sdfsd'));
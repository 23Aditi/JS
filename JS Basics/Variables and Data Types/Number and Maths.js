/*
const score = 400
console.log(score)  //400
console.log(typeof(score)) //number
const balance = new Number(200) //it will be number for sure
console.log(balance)    //[Number: 200]
console.log(typeof(balance))    //object
console.log(balance.toFixed(2)) //200.00 //precision value set to 2 decimal pts
console.log(balance.toString().length) //3
console.log(balance)   //[Number: 200]
/*

/*toPrecision(precision?: number): string
Number of significant digits. Must be in the range 1 - 21, inclusive.


Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
 */

// const otherNumber = 23.45545
// console.log(otherNumber.toPrecision(3));    // 23.5
// const num2 = 1233.45545
// console.log(num2.toPrecision(3))    // 1.23e+3
// //priority is value before decimal
// const hundred = 100000000
// /*Object.toLocaleString(): string
// Returns a date converted to a string using the current locale.*/
// console.log(hundred.toLocaleString('en-IN')) //10,00,00,000 : Indian Standard
// console.log(hundred.toLocaleString()) //100,000,000 : US Standard

// **************************** Maths ***********************
// Library comes by default

console.log(Math);  //Object [Math] {}
console.log(Math.abs(-4));  //4
console.log(Math.round(4.3));   //4
console.log(Math.min(4,2,5,7)); //2
/*(method) Math.random(): number
Returns a pseudorandom number between 0 and 1*/
console.log(Math.random())
console.log(Math.floor(Math.random()*10)+1)   //non zero value

const min = 4
const max = 20

console.log(Math.floor(Math.random()*(max-min +1))+min) 
//floor always rounds of to min value
//The value is multipled by the difference of max and min +1
//and min is added
// this is done to get the no in range.
//Let's check
//Suppose random gives 0. So, we get 1 + min //value greater than min
// Suppose randim gives 1 (not exactly but close to 1). floor gives (max-min) 
// max-min+min  = max

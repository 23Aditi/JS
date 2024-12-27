// //Arrays
// const myArray = [0,1,2,3,4,5];
// const array = ["hi",2,45,56,67];
// console.log(myArray);   //[ 0, 1, 2, 3, 4, 5 ]
// console.log(array); //[ 'hi', 2, 45, 56, 67 ]
// // Array gives same reference : shallow copy
// const myhero = new Array(1,2,45,6);

// // Array Methods
// myArray.push(3);
// console.log(myArray)
// /*[
//   0, 1, 2, 3,
//   4, 5, 3
// ] */
// myArray.pop();
// myArray.unshift(9); // inserts at the start
// myArray.shift()    //removes the first value
// console.log(myArray.includes(3)); //true

// const newArr = myArray.join();  //converts to string
// console.log(newArr);    //0,1,2,3,4,5

// // slice , splice

// console.log("A",myArray)    //A [ 0, 1, 2, 3, 4, 5 ]
// const myn1 = myArray.slice(1,3);
// console.log(myn1);  //[ 1, 2 ]
// console.log("B",myArray);   //A [ 0, 1, 2, 3, 4, 5 ]

// const myn2 = myArray.splice(1,3);
// console.log(myn2);  //[ 1, 2, 3 ]
// console.log("C",myArray);   //C [ 0, 4, 5 ]


//const myarr1 = ["123","234",45,"345"];
//const myarr2 = ["12",3334,"fd",456];
//myarr1.push(myarr2);
//console.log(myarr1);  //[ '123', '234', '345', [ '12', 3334, 'fd' ] ]
// myarr2.concat(myarr1);
// console.log(myarr1);
// console.log(myarr2);
// console.log(myarr2.concat(myarr1))
/*
Combines two or more arrays. This method returns a new array without modifying any existing arrays.
[
  '12', 3334,  'fd',
  456,  '123', '234',
  45,   '345'
] */

// const newarray = [...myarr1,...myarr2] //spread operator 
// console.log(newarray)
/*[
  '123', '234', 45,
  '345', '12',  3334,
  'fd',  456
] */


const anotherarray = [1,2,3,[3,[4,[5]]],[56,66,[57,78]]]
const real_array1 = anotherarray.flat(Infinity);
const real_array2 = anotherarray.flat(2);
console.log(real_array1);
/*
[
  1,  2,  3,  3,  4,
  5, 56, 66, 57, 78
]*/
console.log(real_array2);
/*
[
  1,  2,  3,
  3,  4,  [ 5 ],
  56, 66, 57,
  78
]
 */

console.log(Array.isArray("hi"));   //false
console.log(Array.from("hi"))   //[ 'h', 'i' ]
console.log(Array.from({name : "hello"}))   //[]
// for objects we will have to specify if we want an array of keys or values
/*Creates an array from an iterable object.

@param iterable — An iterable object to convert to an array. */
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3))//[ 100, 200, 300 ]
/*Returns a new array from a set of elements.

@param items — A set of elements to include in the new array object. */

//Arrays
const myArray = [0,1,2,3,4,5];
const array = ["hi",2,45,56,67];
console.log(myArray);   //[ 0, 1, 2, 3, 4, 5 ]
console.log(array); //[ 'hi', 2, 45, 56, 67 ]
// Array gives same reference : shallow copy
const myhero = new Array(1,2,45,6);

// Array Methods
myArray.push(3);
console.log(myArray)
/*[
  0, 1, 2, 3,
  4, 5, 3
] */
myArray.pop();
myArray.unshift(9); // inserts at the start
myArray.shift()    //removes the first value
console.log(myArray.includes(3)); //true

const newArr = myArray.join();  //converts to string
console.log(newArr);    //0,1,2,3,4,5

// slice , splice

console.log("A",myArray)    //A [ 0, 1, 2, 3, 4, 5 ]
const myn1 = myArray.slice(1,3);
console.log(myn1);  //[ 1, 2 ]
console.log("B",myArray);   //A [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArray.splice(1,3);
console.log(myn2);  //[ 1, 2, 3 ]
console.log("C",myArray);   //C [ 0, 4, 5 ]




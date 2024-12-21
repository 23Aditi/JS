// Primitive : by value
// 7 types : String, Number , Boolean , null, undefined, Symbol , BigInt
// Reference ( Non primitive)
//Array, objects, functions


// js is dynamically typed
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id==anotherId)  //false

const heros = ["kk","oo"]; //array

let myObj = { //object
    name : "ad",
    age : 22
};

const myFun = function(){   //function
    console.log("Hello world");
}
let a = null;   //object

let b = 12344444444444n; //bigint

console.log(typeof(b))
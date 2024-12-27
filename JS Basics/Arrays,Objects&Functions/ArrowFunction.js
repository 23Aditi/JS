// this keyword : pts to present context
const user = {
    username : "hitesh",
    price : 999 ,
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    /*
hitesh, welcome to website
{
  username: 'hitesh',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
Sam, welcome to website
{
  username: 'Sam',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
} 
  */    
    }
}

// user.welcomeMessage()   //hitesh, welcome to website
// user.username = "Sam"
// user.welcomeMessage()   //Sam, welcome to website

// console.log(this)   //{}
// If the above command is run in windows then
/*Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …} */


// Using 'this.' in functions
function chai(){
    let username = "hitesh"
    console.log(this.username)  //undefined
}
//chai();
/*
<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter]
}
*/

const chai1 = function(){
    let username = "hitesh"
    console.log(this.username)  //undefined
}
//chai();


const chai2 = () => {
    let username = "hitesh"
    console.log(this.username)  //undefined
}
//chai2()
// Arrow function : you cannot use this in that also

// const addTwo = (num1 , num2) =>{
//     return num1 + num2   // Explicit return
// }
// console.log(addTwo(4,5));   //9

const addTwo = (num1 , num2) => num1 + num2 //Implicit return
console.log(addTwo(4,5));   //9


const addTwo1 = (num1 , num2) => (num1 + num2)
console.log(addTwo1(4,5));   //9

// Why use '()' in  (num1 + num2)
// Bez when we have to return object they cannot be returned without wrapping in ()





// singleton : constructor sei singleton banega and literally sei nahi
//Object.create() //singleton

// object literals
const mySym = Symbol("key1");

const JsUser = {
    name : "Hi",    //keys are by default stored as 
    age : 18,
    [mySym] : "ji",
    "full name" : "Hi Hello",
    location : "pune",
    email : "hi@google.com",
    isLoggedIn : false,

    lastLogindays : ["mon","tue"]
}

console.log(JsUser.email);  //hi@google.com
console.log(JsUser["email"]);   //hi@google.com
console.log(JsUser["full name"])    //Hi Hello
console.log(JsUser[mySym]); //ji    //Symbol as a key
//***********Symbol as a key is imp*************** */
JsUser["email"]="js@gmail.com"
console.log(JsUser["email"]);   //js@gmail.com
//Object.freeze(JsUser);
JsUser["email"]="jsUser@gmail.com"
console.log(JsUser["email"]);   //js@gmail.com
/*No error is given but freeze doesn't allow to change values*/
console.log(JsUser);
/*
{
  name: 'Hi',
  age: 18,
  'full name': 'Hi Hello',
  location: 'pune',
  email: 'js@gmail.com',
  isLoggedIn: false,
  lastLogindays: [ 'mon', 'tue' ],
  [Symbol(key1)]: 'ji'
} */

JsUser.greeting = function(){
    console.log("Hello Js User");
}
console.log(JsUser.greeting); //[Function (anonymous)]
console.log(JsUser.greeting())  //undefined ////Hello Js User

JsUser.greetingTwo = function(){
  console.log(`Hello Js User,${this.name}`);
}
console.log("---------------------")
console.log(JsUser.greetingTwo);//[Function (anonymous)]
console.log(JsUser.greetingTwo());//Hello Js User,Hi  //undefined


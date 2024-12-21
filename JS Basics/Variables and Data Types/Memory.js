//Stack and Heap memory 
// Stack : primtive type 
// Heap : Non primtive type

let myName = "name" // this values goes in stack
let Name = myName   //stack gives copy not reference of original value
myName = "user"

console.log(myName) // user
console.log(Name) // name

let myObj = {
    email : "hello",
    work : "full time"
}

let myObj2 = myObj;
myObj2.email = "byee"

console.log(myObj)  //{ email: 'byee', work: 'full time' }
console.log(myObj2) //{ email: 'byee', work: 'full time' }
// Heap always gives reference. So, actual changes are made in memory itself
 


function sayMyName(){
    console.log("H");
    console.log("i");
}
sayMyName();
/*  H
    i   */
console.log(sayMyName); //[Function: sayMyName]

function addTwoNumbers (number1 , number2){
    console.log(number1+number2);
}

addTwoNumbers(2+3); //NaN
addTwoNumbers(4+"6");   //46undefined
addTwoNumbers(4,null);  //4

const result = addTwoNumbers(3,6);  //9
console.log(result);    //undefined

function addTwoNumbers1 (number1 , number2){
    return (number1+number2);
}
const result1 = addTwoNumbers1(3,6);  // no output printed
console.log("result : " ,result1); //result :  9



function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage("user"));  //user just logged in
console.log(loginUserMessage());    //undefined just logged in

function loginUserMessage1(username){
    if(!username){  // or user username===undefined
        console.log("pls enter valid user name");
        return;
    }
    return `${username} just logged in`
}
console.log(loginUserMessage1());    //pls enter valid user name//undefined


function loginUserMessage2(username = "New User"){
    if(!username){  // this block is not entered in this case
        console.log("pls enter valid user name");
        return;
    }
    return `${username} just logged in`
}
console.log(loginUserMessage2());   //New User just logged in

// When you don't know how many arguments you will have
// For eg. in case of shopping cart we don't know ki how many items will be added
// In such a case ... (rest operator) will be used

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200,400,500,2000));  //[ 200, 400, 500, 2000 ]


function calculateCartPrice(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice(200,400,500,2000));  //[ 500, 2000 ]


const user = {
    username : "hello",
    price : 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price
        is ${anyObject.price}`);
}
handleObject(user);
//Username is hello and price is 199
//But if suppose we change price to prices in object then
//Username is hello and price is undefined


handleObject({
    username : "Sam",
    price : 399
}); //Username is Sam and price is 399

function returnSecondValue(getArray){
    return getArray[1];
}
const mynewArray = [23,454,56,266];
console.log(returnSecondValue(mynewArray)); //454





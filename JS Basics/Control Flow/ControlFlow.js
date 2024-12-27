// // < , > , <= , >= , == , != , ===
// const isLoggedIn = true;
// if(2=="2"){
//     console.log("executed");    //executed
// }

// if(2==="2"){
//     console.log("executed");    //doesn't go inside loop
// }else{
//     console.log("not executed");    //not executed
// }


// const score = 200
// if(score > 100){
//     const power = "fly";
//     console.log(`User power : ${power}`);   //User power : fly
// }
// //console.log(`User power : ${power}`);   //ReferenceError: power is not defined

// //shorthand
// const balance = 100;
// if(balance > 500) console.log("test");
// else if(balance > 750 && balance >0) console.log("test1")
// else console.log("test2");  //test2

// //  || , && , ===


// // switch(key){
// //     case value :

// //         break;
// //     default:
// //         break;   
// // }

// switch condition when found true leads to execution of all the rest of the code
// except default

/*
falsy values : false , 0 , -0 , BigInt 0n , "" , null, undefined, NAN
truthy values : "0" , 'false', " ",[],{}, function(){}
*/ 
/* for array : arr.length === 0
for object : object.keys(emptyobj).length === 0
*/

// false == 0 
// false == ''
// 0 == ''

// Nullish Coalescing Operator (??) : null undefined
let val1 ;
val1 = 5 ?? 10  //5
val1 = null ?? 10   //10
val1 = undefined ?? 15  //15
val1 = undefined ?? null    //null
val1 = null ?? 10 ?? 15 //10 (first val for this case)

console.log(val1);  //5


// Terniary Operator 
// condition ? true : false
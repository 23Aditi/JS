// < , > , <= , >= , == , != , ===
const isLoggedIn = true;
if(2=="2"){
    console.log("executed");    //executed
}

if(2==="2"){
    console.log("executed");    //doesn't go inside loop
}else{
    console.log("not executed");    //not executed
}


const score = 200
if(score > 100){
    const power = "fly";
    console.log(`User power : ${power}`);   //User power : fly
}
//console.log(`User power : ${power}`);   //ReferenceError: power is not defined

//shorthand
const balance = 100;
if(balance > 500) console.log("test");
else if(balance > 750 && balance >0) console.log("test1")
else console.log("test2");  //test2

//  || , && , ===


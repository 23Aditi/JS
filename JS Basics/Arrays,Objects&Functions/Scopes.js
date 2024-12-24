let a = 300

if(true){
    let a = 10
    const b = 20
    var c = 30
    console.log("Inner : ",a)   //10
}

console.log(a); //300
//console.log(a)  //ReferenceError: a is not defined
//console.log(b)  //ReferenceError: b is not defined
console.log(c)  //30

// Nested scope
console.log("NESTED SCOPE : ")
function one(){
    const username = "Me"
    function two(){
        const website = "youtube"
        console.log(username)
    }
    
    two();  //Me
    //console.log(website);   //ReferenceError: website is not defined
}
one();

if(true){
    const username = "hi"
    if(username === "hi"){
        const website = "youtube";
        console.log(username + " " + website)   //hi youtube
    }
    //console.log(website)    //ReferenceError: website is not defined
}
//console.log(username)   //ReferenceError: username is not defined


// *************** interesting ******************

console.log(addone(5))  //This will be executed
function addone(num){
    return num + 1
}


// When we try to access a fun before it's declaration
console.log(addTwo(5))  //ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num){   
    return num + 2
}


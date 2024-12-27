// let petName = 'Rocky'   //Global variable
// myFunction();

// function myFunction(){
//     fruit = 'apple';    //variable without var , let or const automatically becomes global variables
//     let city = 'USA';   //local variables
//     console.log(typeof petName + '- ' + 'My pet name is ' + petName)
// }

// console.log(typeof petName + '- ' + 'My pet name is '+ petName + 'Fruit name is '+fruit)
// console.log(typeof petName + '- ' + 'My pet name is '+ petName + 'City name is '+city)


/*
@23Aditi ➜ /workspaces/JS/JS Basics (main) $ node "Global and Local variables.js"
string- My pet name is Rocky
string- My pet name is RockyFruit name is apple
/workspaces/JS/JS Basics/Global and Local variables.js:11
console.log(typeof petName + '- ' + 'My pet name is '+ petName + 'City name is '+city)
                                                                                 ^

ReferenceError: city is not defined
    at Object.<anonymous> (/workspaces/JS/JS Basics/Global and Local variables.js:11:82)
    at Module._compile (node:internal/modules/cjs/loader:1469:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1548:10)
    at Module.load (node:internal/modules/cjs/loader:1288:32)
    at Module._load (node:internal/modules/cjs/loader:1104:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:173:12)
    at node:internal/main/run_main_module:28:49

Node.js v20.18.1
@23Aditi ➜ /workspaces/JS/JS Basics (main) $ 
*/

//---------------------Understanding Scope-------------------------------
myfunction();
anotherFunc();
let petname = "Butterfly";    //global scope
function myfunction(){
    let petname = "Sizzer";     //local scope
    console.log(petname);
}
function anotherFunc(){
    let petName = "Tom";    //local scope
    console.log(petName);
}
console.log(petname);

/*
@23Aditi ➜ /workspaces/JS/JS Basics (main) $ node "Global and Local variables.js"
Sizzer
Tom
Butterfly
@23Aditi ➜ /workspaces/JS/JS Basics (main) $ 
*/

/*NOTE :  Use local variables whenever possible. Always use the var keyword to declare a new variable before the variable is referred to by other statements.*/

    
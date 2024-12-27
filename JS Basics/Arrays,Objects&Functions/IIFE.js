// IIFE : Immediately Invoked Function Expressions 
// File that has database connection. So, we want the moment file starts
// the connection functions are invoked

//++++++++++ USe ';' after fun declaration++++++++++++
function chai(){
    console.log('DB Connected');
}
//chai(); //Connected

(function chai(){   //Named IIFE 
    console.log('DB Connected successfully');
})() ;   //DB Connected successfully

// We use them when we don't want any pollution bez of global scope
//TypeError: (intermediate value)(...) is not a function
// In case of IIFE we need to use a ';' after func declaration in order to avoid errors
(() =>{ //Simple IIFE
    console.log("DB two connected");
})(); //DB two connected


((name) =>{
    console.log(`User name : ${name}`);
})('Mishu');    //User name : Mishu







const button = document.querySelectorAll('.button');
console.log(button); //NodeList 
const body = document.querySelector('body');
//event can be taken into functions

button.forEach(function (button){
    console.log(button);
    // event listener 
    button.addEventListener('click',function(event){
        console.log(event);
        console.log(event.target);
        // if(event.target.id=="grey"){
        //     body.style.background = event.target.id;
        // }
        switch(event.target.id){
            case "grey" :
                body.style.background = event.target.id;break;
            case "white" :
                body.style.background = event.target.id;break;
            case "blue" :
                body.style.background = event.target.id;break;
            case "yellow" :
                body.style.background = event.target.id;break;
            default :   
            body.style.background = '#212121';
        }
    })
});





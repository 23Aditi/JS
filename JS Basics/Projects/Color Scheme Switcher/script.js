const button = document.querySelectorAll('.button');
console.log(button); //NodeList 
const body = document.querySelector('body');
//event can be taken into functions

button.forEach(function (button){
    //console.log(button);
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

/*
const button = document.querySelectorAll('.button');
const body = document.querySelector('body');
const heading = document.querySelector('h2');
//console.log(button);
button.forEach(function (b){
  b.addEventListener('mouseover',function (event){
    const color = event.target.id;
    if(['grey','blue','white','yellow'].includes(color)){
      body.style.backgroundColor = color;
      const newheading = document.createElement('h2');
      newheading.textContent = `Hey your mouse was on ${color}`;
      heading.replaceWith(newheading);
    }else{
      body.style.backgroundColor = '#212121';
    }


  })
})

*/



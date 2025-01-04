document.querySelector('form').addEventListener('submit',function(event){
    event.preventDefault(); // prevent default action
    const height = parseInt(document.querySelector('#height').value) // value is in string
    const weight = parseInt(document.querySelector('#weight').value)
    // We write height n weight inside form inorder to avoide empty values
    const results = document.querySelector('#results');
    if(height === '' || height <0 || isNaN(height)){
        results.innerHTML = "Please give a valid height";
    }
    else if(weight === '' || weight <0 || isNaN(weight)){
        results.innerHTML = "Please give a valid weight";
    }else{
        const BMI = (weight/((height*height)/10000)).toFixed(2);
        results.innerHTML = `<span>BMI : ${BMI}</span>`
    }
})



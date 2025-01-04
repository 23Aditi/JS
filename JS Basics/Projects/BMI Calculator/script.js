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
        
        if(BMI<18.6){
            results.innerHTML = `<span>BMI : ${BMI} , You are under-weight !!!</span>`
        }else if(BMI>=18.6 && BMI<=24.9){
            results.innerHTML = `<span>BMI : ${BMI} , Your weight is in normal range !!!</span>`
        }else{
            results.innerHTML = `<span>BMI : ${BMI} , You are over-weight !!!</span>`
        }
    }
})



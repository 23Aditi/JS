const myNumbers = [1,2,3,4,5,6,7,8,9,10]

//const newNums = myNumbers.map((num)=> num +10);
const newNums = myNumbers
                        .map((num)=>num*10)
                        .map((num) => num+1)
                        .filter((num)=> num>50); // channing
//[ 51, 61, 71, 81, 91, 101 ]

console.log(newNums);
/*
[
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20 
]
*/

/*
--Filter--
Purpose: It is used to create a new array that contains all the elements that satisfy a specific condition (i.e., it filters out the elements).
--Map--
Purpose: It is used to transform or modify each element in an array by applying a function to each item.
--Both doesn't modify the original array.--
*/

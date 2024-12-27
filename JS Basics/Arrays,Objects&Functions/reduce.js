const myNums = [1,2,3];
initialValue = 0;
// const myTotal = myNums.reduce(
//     function(acc , currentValue) {
//         console.log(acc , currentValue);
//         return acc + currentValue;
//     }, initialValue
// )
// console.log(myTotal);
/*
0 1
1 2
3 3
6
PS F:\JS>
*/


const myTotal = myNums.reduce(
    (acc,currVal)   => (acc+currVal),0
)
console.log(myTotal);   //6



const shoppingCart = [
    {
      id: 1,
      name: "Laptop",
      price: 75000,
      quantity: 1,
      category: "Electronics",
    },
    {
      id: 2,
      name: "Headphones",
      price: 2500,
      quantity: 2,
      category: "Accessories",
    },
    {
      id: 3,
      name: "Notebook",
      price: 50,
      quantity: 5,
      category: "Stationery",
    },
    {
      id: 4,
      name: "Water Bottle",
      price: 500,
      quantity: 1,
      category: "Home Essentials",
    },
  ];

  
const total = shoppingCart.reduce((acc,currVal)=>(acc + currVal.price*currVal.quantity),0)
console.log(total);


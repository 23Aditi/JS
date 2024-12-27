const coding = ["js","java","python","cpp"]
const values = coding.forEach((item)=>{
    //console.log(item);
})

//console.log(values);    //undifined

const value = coding.forEach((item)=>{
    return item;
})

//console.log(value);    //undifined


const value1 = coding.forEach((item)=>{
})

//console.log(value1);    //undifined

// Conclusion : For Each loop doesn't return anythings

const myNums = [1,2,3,4,5,6,7,8,9,10]; //Implicit return
const newNums = myNums.filter((num)=>{
    num > 4
})
//console.log(newNums);   //[]


const newNum = myNums.filter((num)=>num > 4)    //Inplicit return
//console.log(newNum);   //[ 5, 6, 7, 8, 9, 10 ]


// ()-> implicit return & {}->explicit return 

const newNum1 = [];

myNums.forEach((num)=>{
    if(num>4){
        newNum1.push(num);
    }
})
//console.log(newNum1);   //[ 5, 6, 7, 8, 9, 10 ]

const books = [
    { title: 'The Silent Witness', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'A Journey Within', genre: 'Non-Fiction', publish: 1995, edition: 2010 },
    { title: 'Beyond the Stars', genre: 'Science Fiction', publish: 2001, edition: 2015 },
    { title: 'Realm of Wonders', genre: 'Fantasy', publish: 1988, edition: 2000 },
    { title: 'The Untold Story', genre: 'Biography', publish: 1992, edition: 2005 },
    { title: 'Shadows in the Dark', genre: 'Mystery', publish: 1985, edition: 1999 },
    { title: 'Echoes of the Past', genre: 'Historical Fiction', publish: 1990, edition: 2003 },
    { title: 'Whispers of Fear', genre: 'Horror', publish: 1978, edition: 1985 },
    { title: 'The Path to Clarity', genre: 'Self-Help', publish: 2000, edition: 2012 },
    { title: 'Adventures Unbound', genre: 'Adventure', publish: 1998, edition: 2007 }
];

let userBooks = books.filter((bk) => bk.genre ==='Horror');

userBooks = books.filter((bk)=> bk.publish>1900);
userBooks = books.filter((bk)=> bk.publish>1900 && bk.genre==='Fantasy')
console.log(userBooks)

/*
[
  {
    title: 'Realm of Wonders',
    genre: 'Fantasy',
    publish: 1988,
    edition: 2000
  }
]
  */
 

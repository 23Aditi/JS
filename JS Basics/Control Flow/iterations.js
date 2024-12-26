for(let index = 0; index < 10 ; index++){
    const ele = index;
    //console.log(ele);
}

let myarray = ["flash","batman","superman"]
for(let index = 0 ; index < myarray.length ; index++){
    //console.log(myarray[index]);
    // you get undefined instead of out of bound
}


// break and continue

// while and do while loop 
// while (condition) {
    
// }
// do {
    
// } while (condition);

// arrays is mostly used to send data by APIs and DBs
// And so there are specific loops for arrays

// For of 
// [{},{},{}]
// ["","",""]
const arr = [1,2,3,4,5];
for(const num of arr){
    //console.log(num);
}
const greetings = "Hello World";
for(const greet of greetings){
    //console.log(greet);
}

// Maps in Js
const map = new Map();  //it doesn't have duplicate values and order of insertion is maintained
map.set('IN' , "India");
map.set('USA',"United States of America");
map.set("FR","FRANCE");
map.set('IN' , "India");

//console.log(map);
// Map(3) {
//     'IN' => 'India',
//     'USA' => 'United States of America',
//     'FR' => 'FRANCE'
//   }
for(const key of map){
 // console.log(key)
}
// [ 'IN', 'India' ]
// [ 'USA', 'United States of America' ]
// [ 'FR', 'FRANCE' ]

for(const [key,value] of map){
  //console.log(key, value);
}



// Object
const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}
 /* for(const [key,value] of myObject){
    console.log(key,value); //TypeError: myObject is not iterable
}*/

const myObj = {
    js : "javascript",
    cpp : "c++",
    rb : "ruby",
    swift : "swift by apple"
}



// FOR IN LOOP
for(const key in myObj){ 
 // console.log(myObj[key]);
   }

for(const key in arr){
    console.log(key, arr[key]);
}

for(const key in map){
    console.log(key);   // it is not iterable
}



// For each loop
const coding = ["js","cpp","java"]
coding.forEach( function (item) {
    console.log(item);
})

coding.forEach((item)=>{});

function printMe(item){
    console.log(item);
}

coding.forEach(printMe);

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})

/*js 0 [ 'js', 'cpp', 'java' ]
cpp 1 [ 'js', 'cpp', 'java' ]
java 2 [ 'js', 'cpp', 'java' ]*/

const myCoding =[
    {
        languageName : "javascript",
        languageFileName : ".js"
    },
    {
        languageName : "java",
        languageFileName : ".java"
    },
    {
        languageName : "python",
        languageFileName : ".py"
    },
]

myCoding.forEach((item) =>{
    console.log(item.languageFileName);
})
/*.js
.java
.py*/




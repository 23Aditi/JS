// String are represented by "" & ''
const name = "User Name"
const repoCount = 50
// console.log(name + repoCount + " Value") //hello50 Value

console.log(`Hellp my is ${name} and my repoCount is ${repoCount} `);

const gameName = new String('Name'); // This gives methods n key value pairs
console.log(gameName[0]);   //N
console.log(gameName.length);   //4
console.log(gameName.toUpperCase());    //NAME
console.log(gameName)   //[String: 'Name']
console.log(gameName.indexOf('a')); //1
console.log(gameName.charAt(2));    //m
console.log(gameName.substring(0,2));   //Na

const anotherString = gameName.slice(0,5);  //Name
console.log(anotherString);

const url = "https://hitesh.com/hitesh%20choudhary";
console.log(url.replace('%20','-'));    //https://hitesh.com/hitesh-choudhary
console.log(url.split('/'));    //[ 'https:', '', 'hitesh.com', 'hitesh%20choudhary' ]
console.log(url.includes('//'));    //true



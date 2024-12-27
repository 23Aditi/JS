// Jan 1, 1970 : start
//Dates
/*
let myDate = new Date()
console.log(myDate);    //2024-12-22T12:52:46.643Z
console.log(myDate.toDateString()); //Sun Dec 22 2024
console.log(myDate.toISOString());  //2024-12-22T12:55:55.802Z
console.log(myDate.toJSON());   //2024-12-22T12:55:55.802Z
console.log(myDate.toLocaleDateString());   //12/22/2024
console.log(myDate.toLocaleString());   //12/22/2024, 12:55:55 PM
console.log(myDate.toLocaleTimeString());   //12:55:55 PM
console.log(myDate.toString()); //Sun Dec 22 2024 12:55:55 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toTimeString());     //12:55:55 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toUTCString());  //Sun, 22 Dec 2024 12:55:55 GMT
console.log(typeof(myDate)); //Object

let date = new Date(23,0,23);
console.log(date.toString());   //Tue Jan 23 1923 00:00:00 GMT+0000 (Coordinated Universal Time)
// In JS month starts from 0    
let date1 = new Date("01-14-2023");
console.log(date1.toLocaleDateString());    //1/14/2023
*/
let myCreatedDate = new Date("01-14-2023");
let myTimeStamp = Date.now();
console.log(myTimeStamp);   //1734872600843
console.log(myCreatedDate.getTime());   //1673654400000
//millisecond
console.log(Math.floor(Date.now()/1000))// to get value in seconds
//1734872688

let newDate = new Date();
console.log(newDate)    //2024-12-22T13:05:46.849Z
console.log(newDate.getDay());  //0


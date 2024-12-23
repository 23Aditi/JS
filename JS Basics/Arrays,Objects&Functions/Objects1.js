// Singleton Objects

const tinderUser = new Object();
tinderUser.id = "123abc";
tinderUser.name = "Samey";
tinderUser.isLoggedIn = false;
console.log(tinderUser);

const regularUser = {
    email : "someone@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Hello,",
            lastname : "hi"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

// When using API sometimes there is a need, if fullname exists then do this
// For that the below Sytax is followed
console.log(regularUser.fullname?.userfullname.firstname);


const obj1 = {1 : 'a' , 2 : 'b'};
const obj2 = {3 : 'c' , 4 : 'd'};
const obj3 = {obj1 , obj2};
console.log(obj3);
/*{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }*/

const obj4 = Object.assign(obj1,obj2);  //obj1 is acting like a source
console.log(obj4);
console.log(obj1);  //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
/*{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' } */
// This returns the new object
// Another syntax for guarantee of object return
const obj5 = Object.assign({},obj1,obj2);   //This ensures that values are stored in new object
/* 3/4
assign(target: {}, source1: { 1: string; 2: string; }, source2: { 3: string; 4: string; }, source3: any): any
The third source object from which to copy properties.


Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.*/

const obj6 = {...obj1,...obj3} //spread format

// When u get value from data base u get an array of values
const users = [ //array of objects
    {
        id : 1,
        email : "h@gmail.com"
    },
    {
        id : 2,
        email : "b@gmail.com"
    }
]

users[1].email
console.log(tinderUser);    //{ id: '123abc', name: 'Samey', isLoggedIn: false }
console.log(Object.keys(tinderUser));   //[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); //[ '123abc', 'Samey', false ]
console.log(Object.entries(tinderUser));
/*[ [ 'id', '123abc' ], [ 'name', 'Samey' ], [ 'isLoggedIn', false ] ] */
console.log(tinderUser.hasOwnProperty('isLoggedIn'));   //true

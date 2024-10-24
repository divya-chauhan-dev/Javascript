/*There are two categories of data types on the basis of that 
how does the data stored in memory and how we can access that data

# Primitive data types:   these all are call by value data types
1. Number
2. BigInt
3. String
4. Boolean
5. Null
6. Undefined
7. Symbol              */

//Examples of each data type are as follows:
// const age = 22;
// const bigNumber = 222222222222222222n;
// const name = "Divya";
// const isLoggedIn = False;
// const temperature = null;
// let score;                                    //for undefined



// let id = Symbol("123");              //here both the attributes that we pass to Symbol are same but still 
// let anotherId = Symbol("123");       // id and anotherId will have store unique values





/* 
# Non - Primitive data types (also known as reference data types):
# these all data types are call by reference
1. Array
2. Objects
3. Function             */


//Example of each NPDT is as follows:
const Name = ["Divya","Shivi","Chitra"];
let myObject = {
    Age : "22",
    course : "MCA",
    section : "B",
}

let myFunction = function(){
    console.log("Hello World");
    
}

//Note : if you want to master javascript then master its objects and browser event


// console.log(typeof Name);                // output is object
// console.log(typeof myObject);            // again object
// console.log(typeof myFunction);          // function

//also js is dynamically typed language







//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


/* 
there are types of memory :
1. Stack (used for all the primitive data types i.e. these all are call
          by value or here we got a copy of the original value or the 
          variable that we have declared so that all the changes that
          we made just only happens to that copied value not to the orginal one)
          
          
2. Heap (used for Non-Primitive data types i.e. these all are call by reference
         or we can say that here only address of memory location or reference of 
         the original value)

         */





//Example of Stack and Heap :
let myScore = 89;
let anotherScore = myScore;
// console.log(anotherScore);
anotherScore = 99;
console.log(myScore);
console.log(anotherScore);



let userOne = {
    email: "user@google.com",
    upi: "user@ybl",
}

let userTwo = userOne;
console.log(userTwo);

userTwo.email = "divya@googledotcom"
console.log(userOne.email)



//hence this is all about stack and heap




      













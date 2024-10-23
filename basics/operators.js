// console.log(2 > 1);
// console.log(2 >= 1);             // these all are comparison operators between similar data types, hence easy to
// console.log(2 == 1);             //  execute and understand 
// console.log(2 < 1);
// console.log(2 <= 1);


// Now we will see the cases when both the data types are different but we should avoid their use as they are more 
//confusing

// console.log("2"> 1);
// console.log(2 > "1");               // here first it converts the string data type to number and then compare them
// console.log("02"> 1);


// console.log(null > 0);
// console.log(null == 0);               // here also we can have the similar confusing case
// console.log(null >= 0);


// console.log(undefined > 0);
// console.log(undefined >= 0);
// console.log(undefined == 0);          // these are also consider into similar confusing cases for comparison 
// console.log(undefined < 0);           // as they are of different data types again but it provides with false 
// console.log(undefined <= 0);          // in every case of camparison of undefined with 0





// we have one more operator for checking equality known as STRICT CHECK denoted by ===
// it is used to not only check for the equality between any two values but also used to check data types of both 
// the values at the same time

console.log(2===2);          //gives true in output as here both values are equal as well as data types of both are same
console.log("2"===2);        //gives false as data types are different for both values











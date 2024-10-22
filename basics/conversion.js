let score = "Divya"
console.log(typeof score);   // type of score is string

// now i want to convert this score from string to number
let numberscore = Number(score);
console.log(typeof numberscore);      // converts to number
console.log(numberscore);             // but gives NaN(i.e. not a number) value


let age = null
console.log(typeof age)

let numberage = Number(age)
console.log(typeof numberage);   
console.log(numberage);

/* similarly we can have conversions from different different type of data types to number data type
   "33" => 33
   "33abc" => NaN
   null => 0
   undefined => NaN 
   true => 1 and false => 0 */

 
let isLoggedIn = "Divya"
console.log(typeof isLoggedIn);

let booleanLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanLoggedIn);
console.log(booleanLoggedIn);   


/* Similarly from different data types to boolean data types
"Divya" => True
"" => False
0 => False and 1 => True
and many more*/


let someNumber = null
console.log(typeof someNumber);

let stringNumber = String(someNumber)
console.log(typeof stringNumber);
console.log(stringNumber);




//This is how conversion takes place from one data type to different data type











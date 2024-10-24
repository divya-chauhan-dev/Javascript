//declaration of Primitive string(i.e. it gives string in return)
const name = "Divya"
const channel = 3;

//old way to concatinate or add strings
console.log(name +"have" + channel + "channels");
console.log(name,"have", channel, "channels");


//modern way to concatinate string by using string interpolation where 
//we create placeholders and inject current variables in those placeholders
console.log(`My name is ${name} and i have ${channel} youtube channels.`);


//declaration of string as an object(i.e. it gives object(key-value pairs) in return)
const gameName = new String("Subway-suffer");                         // syntax is : new String()
console.log(gameName[0]);
console.log(gameName[1]);
console.log(gameName[2]);
console.log(gameName[3]);
console.log(gameName[4]);



/*
SOME IMPROTANT ABOUT STRING
# new String("Subwaysuffer") is used to create a String object rather than a primitive string.
# new String("Subwaysuffer") creates an object of type String.
# name and channel will return "string", whereas gameName will return "object".
# The new keyword is used in JavaScript to create an instance of an object.
# When you use new with a constructor function (like String()), 
  it creates a new object that is an instance of the type defined by that constructor.
# In this case, new String("Subwaysuffer") creates a String object (an instance of the String constructor)
  rather than just a primitive string.
# String() is a constructor function in JavaScript. It’s built into the language to create instances of 
  the String object.    

  */


  // Some prototypes of string that we can use:
  console.log(gameName.length);
  console.log(gameName.__proto__);
  console.log(gameName.toUpperCase());
  console.log(gameName.charAt(2));
  console.log(gameName.indexOf('f'));
  console.log(gameName.toLowerCase());

  const newString = gameName.substring(0,5);
  console.log(newString);

  const anotherString = gameName.slice(-7,4);
  console.log(anotherString);

  const newStringOne = "   divya   "
  console.log(newStringOne);
  console.log(newStringOne.trim());

  const url = "https://shivam.com/divya%20chauhan";
  console.log(url.replace('%20','-'));

  console.log(url.includes('hitesh'));


  console.log(gameName.split('-'));               // here we are coverting string into array or you can say we
                                                  // are splitting string with dash(-) 
  


  
  

  
  
  
  

  



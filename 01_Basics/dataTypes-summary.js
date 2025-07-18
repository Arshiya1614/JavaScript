// Primitives

// 7 types: String , Number , Boolean , NUll , undefined ,Symbol , BigInt


// References ( Non Primirtives)

//Array , Objects, Functions

// Javascript is dynamically typed language means type checking occurs at run time no explicit declaration

const score = 100;
const scoreValue = 100.34;

const isLogged = false;
const temp = null;
console.log(typeof temp); //object

let userEmail; //undefined

const id = Symbol('123');
const id2 = Symbol('123');
console.log(id === id2); //false

// Reference (Non primitives)
// Array , Objects , Functions

const num = [1,2,3,4,5,6];

let myObj = {
  name : "arshiya",
  age : 21,
  gen : "female"
}

const myFunction = function(){
  {
    var name = "arshiya";
    let name2 = "anas";
    console.log(name2);
  }
  console.log(name);
}


myFunction();
console.log(typeof myFunction);

const bigNum = 1234455666609476890573690n;
console.log(typeof bigNum);


//Type of value      =>   Results
// undefined  => "undefined"
// Null       => "object"
// Boolean     => "boolean"
// Number      => "number"
// BigInt      => "bigint"
// String      => "string"
// Object      => "object"
// Function call => "function"


// stack(Primitives) 
//when we try to make changes in stack , we received its copy only 

let myName = "arshiya"
let myAlternateName = myName

myAlternateName = "ayesha"

console.log(myName);
console.log(myAlternateName);

// Heap (Non-Primitives)
//Meanwhile in heap we receive its reference

let user = {
  email: "user@google.com",
  upi : 496476474,

}

let userTwo = user;
userTwo.email = "arshi@google.com";

console.log(user.email);
console.log(userTwo.email);

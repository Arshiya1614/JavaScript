//object literals

const mySym = Symbol("Key1")

const person = {
  name : "anas",
  age : 21,
  location : "nagpur",
   isLoggedIn : false,
   lastLoginDays : ["Monday" ,"Wednesday"],
   "email" : "anas@googly.com",
   [mySym]  : "123" // correct syntax of using Symbol
} // stored in key value pair form

// two ways of printing value
console.log(person.name);
console.log(person["name"]); // in this case keys are in the form string 

console.log(person.email);
console.log(person["email"]);

// console.log(person.mySym); can't be used like this
// console.log(typeof(person.mySym));

console.log(person[mySym]);
console.log(typeof mySym);

person.age = 22;
console.log(person.age)

// Object.freeze(person); now we can't make any changes in obj

person.email = "anas@gmail.com";
console.log(person); //mail not changes because object is freezed

person.greet = function(){
  console.log("hello handsome");
}

console.log(person.greet());
console.log(person.greet);

person.greet2 = function(){
  console.log(`hello ${this.name}`);
}

console.log(person.greet2());
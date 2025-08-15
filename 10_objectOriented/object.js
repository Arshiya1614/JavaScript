
function multiplyFive(num)
{
  return num*5;
}

multiplyFive.power = 2;
console.log((multiplyFive(3)));
console.log(multiplyFive.power);
console.log(multiplyFive.prototype);

function createUser(username,score){
  this.username = username
  this.score= score
}

createUser.prototype.increament = function(){
   this.score++; //jisne vhi bulaya hai uska score bada do
}

createUser.prototype.printMe = function(){
  console.log(`score is ${this.score}`)
    console.log(`username is ${this.username}`)

}

const alfez = new createUser("alfez", 25)
const tea = new createUser("tea",24)

alfez.printMe();


// A new object is created: The new keyword initiates the creation of a new JavaScript object.

//A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

//The constructor is called:The constructor function is called with the specified arguments and this is bound to the newly created object.If no explicit return value is specified from the constructor, Javascript assumes this, the newly created object , to be the intended return value

//The new object is returned:After the constructor function has been called, if it doesn't return a non-primitive value(object , array , function,etc.), the newly 

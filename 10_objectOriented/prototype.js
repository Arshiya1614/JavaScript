let myname = "arshiya   "
// console.log(myname.trim().length);

let myHeros = ["thor","spiderMan"]

let heroPower ={
  thor : "hammer",
  spiderman : "sling",
  getSpiderPower:function(){
    console.log(`spidy Power is ${this.spiderman}`);
    
  }
}
Object.prototype.arshiya = function(){
  console.log("arshiya is now object");
}

Array.prototype.arshiyahello = function(){
  console.log("hey arshiya");
}

// heroPower.arshiya();
// myHeros.arshiya();

myHeros.arshiyahello();
// heroPower.arshiyahello() can't be accessed other than arrays;

//inheritance
const Teacher = {
  makeVideo : true
}

const TeachingSupport = {
  isAvailable : false
}

const TASupport = {
  makeAssignment : 'JS assignment',
  fullTie : true,
  __proto__:TeachingSupport // way to inherit
}

TeachingSupport.__proto__ = Teacher //2nd way

Object.setPrototypeOf(TASupport,Teacher)

console.log(TASupport.isAvailable);
console.log(TeachingSupport.makeVideo);


String.prototype.trueLength = function(){
  console.log(`${this}`);
  console.log(`true length is ${this.trim().length}`);
  
}
myname.trueLength();
"flower   ".trueLength();
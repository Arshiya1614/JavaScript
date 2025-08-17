const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descriptor);


// console.log(Math.PI);
// Math.PI = 20 can't override
// console.log(Math.PI);

const user = {
  username : "arshiya",
  email : "arshi.com",
  pwd : "123",

  logUser : function(){
    console.log("logged in")
    
  }
}
 
console.log(Object.getOwnPropertyDescriptor(user ,"username"));

Object.defineProperty(user , 'username',{
  writable : false, //updating 
  enumerable : false //iteration
})

console.log(Object.getOwnPropertyDescriptor(user ,"username"));

// user.username = "anas"
// console.log(user.username);

for (let [key, value] of Object.entries(user)) {
  if(typeof value !== 'function')
 {
   console.log(`${key} : ${value}`);
 }
   
}




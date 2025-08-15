const user = {
  username: "arshiya",
  logicCount: 8,
  signedIn: true,

  getUserDetails: function () {
    // console.log("user details fetched");
    console.log(`username : ${this.username}`);
    console.log(this);
  },
};

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this)

function User(username, logicCount, signedIn) {
  this.username = username;
  this.logicCount = logicCount;
  this.signedIn = signedIn;
  this.greeting = function(){
    console.log(`welcome ${this.username}`);
    
  }
  return this;
}

const userOne = new User("arshiya", 12, false);
const userTwo = new User("anas",12, true);
console.log(userOne);
console.log(userTwo.constructor);
console.log(userOne instanceof User);
console.log(userOne instanceof Object);








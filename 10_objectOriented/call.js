
function setUsername(username){
  this.username = username
}

function createUser(username, age , email){
  setUsername.call(this,username)
  this.age = age
  this.email = email
}

const user1 = new createUser("arshiya",21,"arshi.com")
console.log(user1);

class User{
  constructor(username, mail , pwd){
    this.username = username
    this.mail = mail
    this.pwd = pwd
  }

  encryptpwd() {
    console.log(`${this.pwd}abc`);
  } 

  changeUsername(){
    console.log(`${this.username.toUpperCase()}`);
    
  }
}

const user1 = new User("arshiya","arshi.com","arshi123")
console.log(user1.encryptpwd());
console.log(user1.changeUsername());

//------------------------------------------//
function user(username, mail , pwd){
    this.username = username
    this.mail = mail
    this.pwd = pwd
  }

  user.prototype.encryptpwd = function()
  {
     console.log(`${this.pwd}abc`);
  }

  user.prototype.changeUsername = function(){
     console.log(`${this.username.toUpperCase()}`); 
  }

  const user2 = new User("anas","anas.com","anas@123")
  console.log(user2.changeUsername());
  
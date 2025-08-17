class user{
  constructor(username){
    this.username = username
  }

  logme(){
    console.log(`username is ${this.username}`);
    
  }
}

class child extends user{
   constructor(username , email, pwd){
    super(username)
    this.email = email
    this.pwd = pwd
   }

   childlog(){
    console.log(`child logged in ${this.username}`);
    
   }
}

const child1 = new child("arshi","arshi.com","arshi123")
console.log(child1);
child1.logme()
child1.childlog()

const child2 = new user("arshiya")
console.log(child2);
child2.logme()


console.log(child1 instanceof child);
console.log(child2 instanceof user);


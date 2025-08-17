class user{
  constructor(username){
    this.username = username
  }

  logme(){
    console.log(`username is ${this.username}`);
    
  }

   static createId()// if i don't want any child to access this method so declare it static
   {
    return `123`
  }
}

const anas = new user("anas123")
// console.log(anas.createId()); wrong

class child extends user{
     constructor(username , email){
       super(username)
       this.email = email
     }
   }

const child1 = new child("child1","child1.com")
child1.logme();
// child1.createId(); wrong



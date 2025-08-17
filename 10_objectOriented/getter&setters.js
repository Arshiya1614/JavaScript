class user{
   constructor(username, pwd){
     this.username = username
     this.pwd = pwd
   }   

   set username(value){
    this._username = value
   }

   get username(){
    return this._username 
   }

   set pwd(value){
      this._pwd = value // set in another variable like _pwd
   }

   get pwd(){ //name of getter and setter must be same
      // return this._pwd.toUpperCase();
      return `${this._pwd}123`
   }
}
 const user1 = new user("arshiya" ,"abc")
 console.log(user1.pwd);
 console.log(user1.username);
 
 
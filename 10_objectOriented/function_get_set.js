function user(email , pwd){
  this._email = email;
  this._pwd = pwd

  Object.defineProperty(this ,'email', {
     get : function(){
        return this._email.toUpperCase()
     },

      set : function(value){
           this._email = value
      }
  })

  Object.defineProperty(this,'pwd', {
    get : function(){
       return this._pwd.toUpperCase()
    },
    set : function(value){
           this._pwd = value
      }
  })
}

const anas = new user("anas.com","anas123")
console.log(anas._email);
console.log(anas._pwd);



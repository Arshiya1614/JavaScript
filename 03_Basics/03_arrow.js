const user ={
  username : "anas",
  pwd : "anas123",

  welcome : function()
  {
    console.log(`${this.username} welcome`);
    console.log(this); // only works in objects 
    
  }
}
user.welcome()
user.username = "arshiya"
user.welcome()
console.log(this);


function chai()
{
  const username = "ak"
  console.log(this.username); // not for functions
}

chai()

const chai2 =  function()
{
  const username = "ak"
  console.log(this.username); // not for functions
    console.log(this); // not for functions

}
chai2()

const chai3 = () => // arrow function
{
  const username = "ak"
  console.log(this); 
}
chai3()

const addTwo = (num1 , num2) => {
  return num1+num2;
}
console.log( "arrow function " ,addTwo(2,3));

//arrow function using implicit
//() no need to write return -> implicit
//{} need to write return -> explicit

const addThree = (num1 , num2 , num3) =>  (num1+num2+num3);

console.log( "implicit arrow function " ,addThree(2,3,4));

//if i want to return object using implicit arrow function then

const greet = () => ({ greet : "welcome"})
console.log(greet())



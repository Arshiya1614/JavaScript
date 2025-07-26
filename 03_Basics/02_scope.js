var c = 300;
let b = 200;

if(true)
{
  const a = 10; //block scope
   console.log(a);
   b = 20; //block scope
  console.log("INNER ",b);
   c = 30;
}

 console.log( "OUTER" , b); //Not possible 
//  console.log(b); 
console.log(c); // this is reason var is mostly avoided because its  changable and accessible everywhere



function one()
{
  const username = "arshiya"
  function two()//child function can access variables of parent function 
  {
    console.log(username);
    const website = "chai and code"
  }
  // console.log(website);
  two()
  
}
one()

console.log(addOne(2))// we can call this type of function like this
function addOne(num)
{
  return num + 1
}


console.log(addTwo(2));//but not this
const addTwo = function(num){
  return num+2;
}










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

 console.log( "OUTER" , b); //Not possible : block scope
//  console.log(b); 
console.log(c); // this is reason var is mostly avoided because its global scope and changable









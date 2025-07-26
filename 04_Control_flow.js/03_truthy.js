const usermail = [] // if value exist its truthy else if its empty it consider falsy
if(usermail)
{
  console.log("got mail");
}else{
  console.log("don't have mail");
  
}
//falsy value :
// false , 0 , -0, BigInt 0n , "" ,null, undefined ,NaN

//truthy value :
//"0" , 'false'," " ,[] ,{} ,function(){}

if(usermail.length === 0){
  console.log("empty array");
}

const obj = {}
if(Object.keys(obj).length === 0){
  console.log("object is empty");
  
}

//Nullish Coalescing operator (??): null undefined

let val2;
// val2 = 5 ?? 10
//  val2 = null ?? 10
//  val2 = undefined ?? 10
//  val2 =  null ?? 10 ?? 20
// console.log(val2);


//Ternary Operator
//condition ? True : false

const price = 400 
price < 700 ? console.log("cheaper"): console.log("costly");
;

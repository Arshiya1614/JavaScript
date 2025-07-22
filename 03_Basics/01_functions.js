function sayname(){
  console.log("arshiya");
}

sayname();

function addTwoNum(num1 , num2)//Parameter
{
  console.log(num1+num2);
  
}

// addTwoNum(3,4); //Arguments
// addTwoNum(3, "a");
// addTwoNum(3 ,"4");
// addTwoNum(3, null);


function product(num1 , num2)
{
   return num1*num2;
}

const result = product(5,4);
// console.log("Result:",result);

function login(username)
{
  if(!username)
  {
    console.log("please enter uname");
    return
  }
  return `${username} logged in`
}
console.log(login("anas"));
console.log(login());


function loginUser(username = "arshi")
{
  if(!username)
  {
    console.log("please enter uname");
    return
  }
  return `${username} logged in`
}
console.log(loginUser("anas")); //It will overrride the function
console.log(loginUser()); // it will take the default value present in parameter

function calculatePrice(...num)
{
  return num
}
console.log(calculatePrice(100,200,300));

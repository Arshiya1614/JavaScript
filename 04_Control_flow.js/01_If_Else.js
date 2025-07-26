const temp = 45;
if( temp == "45")
{
  console.log("less than 50");
}else{
  console.log("less than 50");
  
}

// <, >, <= ,>= ,==, != ,=== ,!==

const score = 200
if(score < 300)
{
  let power = "fly" //block scope
  console.log(`user power is : ${power}`);
}
  // console.log(`${power}`); 
  // wrong it is out of scope


  const bal = 300 
  if(bal < 500){
    console.log("less than 500");
  }else if(bal < 500){
    console.log("less than 500");
  }
 else if(bal < 1000){
    console.log("less than 500");
  }else{
    console.log("greater");
    
  }


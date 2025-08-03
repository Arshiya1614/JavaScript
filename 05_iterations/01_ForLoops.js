
//For loop - entry control loop -check the condition before entering the loop
for (let i = 0 ; i<= 10 ;i++)
{
  const element = i;
  if(element == 9)
  {
     console.log("9 is best number");
    
  }
   console.log(element);
}


for (let i = 0; i < 5; i++) {
  console.log(`outer loop ${i}`);
  
    for (let j = 0; j < 5; j++) {
      console.log(`inner loop ${j} for outer loop ${i}`)
      
    }  
}

let arr = ["abc","pqr","xyz"]
for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  console.log(element);
  
}
//Break and continue

//break - exit the loop
//continue -skip that part

for (let k = 0; k <=6; k++) {
  if(k == 4)
  {
    console.log("detected");
    continue;
    // break;
  }
   console.log(k);
  
}
const myObject = { 
  game1 : 'ludo',
  game2 : 'chess',
  game3 : 'snakes & Ladder'
}

for (const key in myObject) {
//  console.log(key); //prints key only 
//  console.log(myObject[key]); //prints value  
console.log(`${key} is ${[key]}`);
}
const arr = ["a" , "b" ,"c" ,"d", "e"]
for (const key in arr) {
  // console.log(key) //gonna print index
  // console.log(arr[key]);
  
  
}
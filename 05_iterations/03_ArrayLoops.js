const arr = [1,2,3,4,5]

for (const element of arr) {
   console.log(element);
  
}

let string = "arshiya"
for (const letter of string) {
   console.log(`letters are ${letter}`);
  
}

const map = new Map() // containes Unique Value
map.set("US" , "UniteD States")
map.set("IN","India")
map.set("LA","Loss Angeles")
// console.log(map);

for (const key of map) {
  console.log(key);
  
}

for (const [key , Value] of map) {
  console.log(key , ':-' ,Value);
  
}
const myObject = { //its not iterable
  'game1' : 'ludo',
  'game2' : 'chess',
  'game3' : 'snakes & Ladder'
}

// for (const [key , Value] of myObject) 
// {
//   console.log(key , ':-' ,Value);
  
// }


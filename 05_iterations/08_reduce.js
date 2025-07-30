const myArr = [1,2,3,4]

const sum0fArr = myArr.reduce( (acc , currentVal) => acc+currentVal ,0)// arrow function
console.log(sum0fArr);


const sumArr = myArr.reduce( function (acc , currentVal){
  console.log(`acc is ${acc} & cv id ${currentVal}`); 
  return acc+currentVal
},0) //normal function
// acc= acc + currentVal

console.log(sumArr);

const buyCourse = [
  {
    itemName : "js course",
    price : 3000
  },
  {
    itemName : "java course",
    price : 2000
  },{
    itemName : "python course",
    price : 1000
  },{
    itemName : "wd course",
    price : 5000
  },
]

const totalAmt = buyCourse.reduce((acc , item) => acc+item.price,0)
console.log(totalAmt);

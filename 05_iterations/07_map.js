const nums = [1,2,3,4,5,6]
// const newNums = nums.map((n) => n+10)


const newNums = nums.map((n) => n*10).map((n) => n+1).filter((n) => n > 30)
console.log(newNums);


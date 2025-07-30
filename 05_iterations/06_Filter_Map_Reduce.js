// const coding = ["html" ,"css" ,"js" ,"java" ,"cpp"]
// const value = coding.forEach((item) => {console.log(item);
//   // return value //it never returns any value 
// })
// console.log(value);


const nums = [ 1,2,3,4,5,6,7,8,9]
const num2 = nums.filter((num) => num > 4)
console.log(num2);

const num3 = nums.filter((num) =>{ return num < 4 }) //{} => scope => return
console.log(num3);


const arrnum = []
nums.forEach((num) => {
  if(num > 5)
  {
    arrnum.push(num)
  }
})
console.log(arrnum)


const books = [
  {title : 'book1' ,genre: 'fiction' ,publish : 1989},
  {title : 'book2' ,genre: 'history' ,publish : 1984},
  {title : 'book3' ,genre: 'Non-fiction' ,publish : 1981},
  {title : 'book4' ,genre: 'science' ,publish : 1990},
  {title : 'book5' ,genre: 'fiction' ,publish : 1986},
]

let bookuser = books.filter((b) => b.genre === 'fiction')
console.log(bookuser);

bookuser = books.filter((b) => {
  return b.publish > 1989
})


console.log(bookuser);


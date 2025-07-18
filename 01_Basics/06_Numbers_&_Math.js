const score  = 100;
console.log(score);

const amt = new Number(200);
console.log(amt);

console.log(amt.toString());
console.log(amt.toString().length);
console.log(amt.toFixed(2));

const newNum = 123.86758

console.log(newNum.toPrecision(3)) //it will roundoff
console.log(newNum.toPrecision(4)) //roundoff
console.log(newNum.toPrecision(2)) // convert into exponential

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'))

console.log(Math);
console.log(Math.abs(-23))
console.log(Math.round(3.5))
console.log(Math.ceil(4.2)) //always provide top value
console.log(Math.ceil(4.6))
console.log(Math.floor(4.2)) // always give smallest value
console.log(Math.floor(4.7))
console.log(Math.min(1,34,4,5,6))

console.log(Math.random()) // it always give value between o and 1
console.log((Math.random()*10)+1) 
 console.log(Math.floor(Math.random()*10)+1) // provide value between 1 and 9


const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1))+ min)



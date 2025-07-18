const arr  = [1,2,3,4,"a","b"] 
//in JavaScript arrays are of mixed dataTypes 
//and they are resizable 
//zero based indexing 
//whenever we perform copy operation it makes shallow copy(whose properties share the same reference points)
//Once changed its original value will also change beacause it is non primitive (refrence) type.


const arr1 = [1,2,3,4,5,6];
const arr2 = ["ab" ,"bcd" ,"efg" ,"ghi"];

const myArr = new Array(1,2,3,4);
console.log(myArr[0]);

myArr.push(7);//Push = adds value to last of an array.
console.log(myArr);

myArr.pop();// Pop = removes last value of an array.
console.log(myArr);

myArr.unshift(9);// Unshift = adds value at first of an array.
console.log(myArr);

myArr.shift();//Shift = removes first value of an array.
console.log(myArr);

console.log(myArr.includes(3)
);// Includes = checks true or false.


console.log(myArr.indexOf(9));// IndexOf = checks the position of value in number form.

const newArr = myArr.join();//Join = converts to string.
console.log(newArr);
console.log(typeof newArr)
console.log(myArr);

console.log("A ",myArr);

const myn1 = myArr.slice(1,3);//Slice(value to remove from,value remove upto but don't include)= returns new array and original value remains unchanged. Use when you need to extract a portion of an array without modifying it.
console.log("B" , myn1);


const myn2 = myArr.splice(1,3);//Splice(value to delete from, number of value to delete) = returns new array with deleted one and original value changed.Use when you need to add, remove, or replace elements within an array.
console.log("c" , myn2);


console.log("A ",myArr);

// console.log("2" > 1);
// console.log ("02" < 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);


//The reason is that an equality check ==  and comparisons > < >= <= work differently.
//comparisions convert null to a number , treating it as 0.
//That's why nul >= 0 is true and null > 0 is false 

console.log("****strict check *****");
console.log("2" === 2); //false beacuse "===" it not only checks value but also dataType
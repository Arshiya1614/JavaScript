let score = 33;

console.log(typeof 33); // number
console.log(typeof(score)); // number

console.log("---------------------------")


let score2 = "33";

console.log(typeof score2); // string

let valueInNumber = Number(score2);
console.log(typeof valueInNumber); //number
console.log(valueInNumber); //33

console.log("---------------------------")

let score3 = "33abc"

console.log(typeof score3); //string 

let valueInNumber3 = Number(score3);
console.log(typeof valueInNumber); // number 
console.log(valueInNumber3); //Nan (Not a number) -because it is not convertable

// "33" => 33
// "33abc" => Nan
// true => 1 ; false => 0

console.log("---------------------------")
let isLogged = "arshiya";

console.log(typeof isLogged); //string

 let ValueInBoolean = Boolean(isLogged);
 console.log(ValueInBoolean); // true
 console.log(typeof ValueInBoolean); // boolean

 // "1" => true
 // "0" => true
 // "arshiya" => true
// "" => false
 // 1 => true
 // 0 => false

 console.log("---------------------------")


let someValue = 33;
let stringNumber = String(someValue);
console.log(stringNumber);
console.log(typeof stringNumber);

console.log("***********OPERATION*************");


let str1 = "hello";
let str2 = " arshiya";

let str = str1 + str2;
console.log(str);

console.log (1 + "2");
console.log("1" + 2);
console.log("1" + 2 + 2);
console.log("1" +( 2 + 2));
console.log(1 + 2 + "2");

console.log(+true); // not good
console.log(+""); //not good

let gameCounter = 100;
++gameCounter;
console.log(gameCounter);



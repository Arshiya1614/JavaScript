const date = new Date();
console.log(date);
console.log(date.toString());
console.log(date.toDateString());
console.log(date.getDate());
console.log(date.getFullYear());
console.log(date.toISOString());
console.log(date.toJSON());
console.log(date.toLocaleDateString());
console.log(date.toTimeString());

let myCreatedDate = new Date(2023 , 0 , 23 )
console.log(myCreatedDate.toDateString());

let mydate2 = new Date(2023, 0 , 23 , 5)
console.log(mydate2.toLocaleString())

let mydate3 = new Date("2004-01-16");
console.log(mydate3.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp);

console.log(mydate3.getTime());

console.log(Math.floor(Date.now()/1000));
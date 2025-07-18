const marvel = ["batman", "spiderMan", "thor"]

const indian = ["shaktiman", "Bhim"]

marvel.push(indian); // push() method in array simply add the array as an new single entity in the existing array.

console.log(marvel);

console.log(marvel[1]);

console.log(marvel[3]);

console.log(marvel[3][1]);

const marvel2 = ["IronMan", "superMan", "Black Panther"]
const indian2 = ["Krish", "RaOne"]

const arr = marvel2.concat(indian2); //concat() method help us achieving a desisered output, like merging the two array, but the problems with concat are, It complicated to concat more then one array simultaneously and also It takes extra space and do the merging operation.
console.log(arr)


const SpreadHeros = [...marvel2, ...indian2] //Despite push and concat we should use spread operator.
console.log(SpreadHeros);


//flat() Returns a new Array with all sub-array elements concatenated into it recursively upto the specified depth

const real_arr = [1,2,3,[4,5,6],7,[12,14 ,[56,78]],79 ,80];
const flatarr = real_arr.flat(Infinity);
console.log(flatarr)

console.log(Array.isArray([1,2,3,4,5])); //check whether object is array or not

console.log(Array.isArray("arshiya"));

console.log(Array.from("arshiya"));//convert to array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))

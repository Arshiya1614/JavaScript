const name = "arshiya"
const repocount = 100

//console.log(name + repocount);

console.log(`hello my name is ${name} and my repo count is ${repocount}`);

const gameName = new String('arshiya anas')
console.log(gameName);
console.log(gameName[0]);
console.log(gameName._proto_);
console.log(gameName.length);
console.log(gameName.charAt(0));
console.log(gameName.indexOf('i'));
console.log(gameName.concat(" khan"));
const newString = gameName.substring(0 , 5); // we can't use negative value here , it ignores it
console.log(newString);

const arshiyaSlice = gameName.slice(-12,5); //we can use both -ve and +ve here
console.log(arshiyaSlice);

const anasSlice = gameName.slice(-4,12);
console.log(anasSlice);

const spaceString = " arshiya   "
console.log(spaceString.replaceAll(" ",""));
console.log(spaceString.trim()); // only work for removing spaces
console.log(spaceString.trimStart());
console.log(spaceString.trimEnd());
console.log(spaceString.replace("arshiya" ,"anas"));

console.log(gameName.includes("anas"));

const starKid = "aditya-roy-kapoor"
console.log(starKid.split('-'))
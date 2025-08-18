// when we return a function , its entire scope also returns that is entire lexical scope is returned

function makefun(){
  const name ="anas"
  function displayname(){
    console.log(name);
  }
  return displayname;
}

const myFunc = makefun();
myFunc();
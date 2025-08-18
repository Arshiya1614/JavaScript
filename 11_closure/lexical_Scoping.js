function outer(){
  let username ="arshiya"
  function inner(){
    var secret = "123"
    console.log("INNER" , username);
  }
  function inner2(){
    console.log("INNER2" , username);
    // console.log(secret); impossible brother can't share anything
    
  }
  inner()
  inner2()
  // console.log(secret); impossible parent can't access child variables
  
}
outer()
// console.log("OUTER",username) not possible
// innner functions can access all the variables of outer function
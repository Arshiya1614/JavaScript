const accountNumber = 12345;
let accountEmail = "abc@gmail.com"; // block scope ,we can't use it outside the block
var accountPwd = "Pass@123"; //function scope , can be used inside the function anywhere
accountState = "bangluru";
let accountCity;

//accountNumber = 1255; not possible const can't change

/* prefer not to use var because of function  scope */

accountEmail = "pqr@gmail.com"
accountPwd = "123pqr"
accountState = "mahrashtra"

console.table([accountNumber,accountEmail,accountPwd,accountState,accountCity]); 
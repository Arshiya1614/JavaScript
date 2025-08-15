// const promiseOne = new Promise(function(resolve, reject){
//  //Do an async task
//  //DB calls , cryptography and network
//  setTimeout(function()
// {
//   console.log("Async task is complete")
//   resolve();
// },1000)

// })

// promiseOne.then(function(){
//   console.log("promised resolved");
  
// })

// new Promise(function(resolve,reject){
//   setTimeout(function(){
//     console.log("Task 2 async");
//     resolve();
//   },2000);
// }).then(function(){
//     console.log("promise 2 resolved");
    
// })


// const promise3 = new Promise(function(resolve,reject){
//   setTimeout(function(){
//     resolve({username:"arshiya" ,age:21})
//   },3000);
// })

// //resolve pass the data through then only 
// promise3.then(function(user){
//   console.log(user);
// })

// const promise4 = new Promise(function(resolve,reject){
//   setTimeout(function(){
//       const error = false;
//       if(!error){
//         resolve({username : "arshi" ,pwd :"123"})
//       }else{
//         reject("something went wrong");
//       }
      
//   },4000)
// })

// promise4.then((user)=>{
//   console.log(user);
//   return user.username;
// }).then((username)=>{
//   console.log(username);
// }).catch((error)=>{
//   console.log(error);
// }).finally(()=> console.log("Finally"))



// const promise5 = new Promise(function(resolve,reject){
//   setTimeout(function(){
//       const error = false;
//       if(!error){
//         resolve({username : "java" ,pwd :"12345"})
//       }else{
//         reject("ERROR5 : something went wrong");
//       }
      
//   },5000)
// })

// async function consumePromise5() {
//   try {
//      const response = await promise5;
//      console.log(response);
     
//   } catch (error) {
//      console.log("ERROR occured");
      
//   }
  
// }
// consumePromise5();

// async function fetchData()
// {
//  try {
//    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
//   const data = await response.json(); //it also takes time to load so we need to make it await too
//   console.log(data);
  
//  } catch (error) {
//    console.log("E:",error);
//  }
// }
// fetchData();

fetch('https://jsonplaceholder.typicode.com/todos/1').then((response)=> {
  return response.json();
}).then((data)=> {
 console.log(data);
}).catch( (error) => console.log("error occured")
)
// const tinderUser = new Object();//Singleton object

const tinderUser = {}//Non-Singleton
tinderUser.id = "123abc"
tinderUser.name = "anas"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
  email :"user@gmail.com",
  fullname : {
    userfullname:{
      fname : "arshiya",
      lname : "khan"
    }
  }
}

console.log(regularUser);
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.lname);

const obj1 = {1:"a" ,2 :"b"}
const obj2 = {3 :"a" , 4 :"b"}

const obj3 = {...obj1 , ...obj2};
console.log(obj3);

const obj4 = {obj1 , obj2};
console.log(obj4);

const objn = Object.assign({} ,obj1 , obj2)
console.log(objn);

const target = { name:"arshi" , age : 20};
const source = { age : 21 , name : "anas"};

const returnedTarget = Object.assign(target,source);//if there are keys of same name it will consider only one
console.log(returnedTarget);

console.log(returnedTarget === target);


user = [
  {id : 1 ,
    name : "arshi"
  },
   {id : 2 ,
    name : "arshi"
  },
   {id : 3 ,
    name : "arshi"
  },
]
console.log(user[1].name);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

//Destructure

const course = {
  name : "js",
  courseIntsructure : "hitesh sir"
}

//instead of using course.courseInstructure we can use below 

const {courseIntsructure : instructor} = course;

// console.log(courseIntsructure);
//now we can simply use it everywhere 

//if i want to small the name of courseInstructure then 
console.log(instructor);


//JSON Format //key and value both are in string format// used in API
// {
//   "name" : "arshi",
//   "course" : "js",
//   "price" : "free"
// }



const coding = ["js" , "java" ,"cpp" ,"python", "html"]

// coding.forEach(function (item) {console.log(item);
// })

// coding.forEach( (item) => {console.log(item);
// })


function printme(item){
  console.log(item)
  
}
coding.forEach(printme) // no need to pass function , its refrence is enough

coding.forEach((item , index , arr) => {
  console.log(item , index , arr);
  
})

const language = [
  {
    languagename : "javaScript",
    filename :"js"
  },
  {
    languagename : "Java",
    filename :"java"
  },
  {
    languagename : "python",
    filename :"py"
  }
]

language.forEach((item) => {
  console.log(item);
  
})

language.forEach((item) => {
  console.log(item.filename);
  
})
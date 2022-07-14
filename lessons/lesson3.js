// console.log("connection succeful")
//FUNCTIONS- a group of re useable code that can be called multiple times
// every function has a  declaration part and calling part
//every function must be called before it can do the work assigned to it

function name(myName,course){
    console.log("i am " +myName + ' and i study '+course)
    // alert("hello function")
}
name('versatile153','mathematics');

function sum(){
    console.log("hello function ")
}
sum()
/////////////////////////////////////////////
function square(num1){
    console.log(num1*num1)

}
square(10)
/////////////////////////////////////////////////////
function multiple(num1=10,num2=100){
    console.log(num1*num2)
}
multiple(2,4)
//////////////////////////////////////////
function hello(value){
    return value % 4

}
// function as value
 let result=  hello(10)
   console.log(result)
   ////////////////////////////////////// function expression
//    let x=function(){
        //   document.querySelector("h1").innerHTML="this  is function expression"
        // let h1=document.querySelector("h1")
        // h1.innerHTML="this is a function"
        // console.log(h1)
        



//    }
//    x()
   //////////////////////////////////1
   ///  CONCAT,MAP,FILTER, REDUCE
   // concat used to join two array together

   let ages=[30,34,44,54,64,74]
   let wages=[100,200,300,400,500]
   let total=ages.concat(wages)
   console.log(ages)
   console.log(wages)
   console.log(total)

   //map takes each item in an array and performs a function on each of them
   let results =wages.map(multiply);
   function multiply(value){
       return value*2
   }
   let values=multiply(2)
   console.log(results)

   ////////////////////////// filter performs a conditional statement on each of the array
   let ifeanyi=ages.filter(comp)
   function comp(value){
       return value <60
   }
//    let x=comp()
//    console.log(ifeanyi)
//    //// reduce returns the total values in an array
// //    let totals=0
//    let odogwu=wages.reduce(comply)
//    function comply(value,total){
//        return  value + total

// //    }
// //  
// document.addEventListener("DOMContententLoaded",function(){
//     document.querySelector("button").onclick=function(){
//         document.querySelector('h1').innerHTML="you clicked me"
        
//     }
    
// })


   /////////////////
   //document.querySelector("h1")  gettig a tag
   //document.querySelector(".classname")     getting a class
   ////document.querySelector("#classname")  getting an id

   //document.getElementById("")
    //document.getElementByClassName("")
     //document.getElementByTagName("")

    


function hello(){
    document.querySelector("h2").innerHTML="you clicked the button"
    document.querySelector("h1").innerHTML="welcome to the real bussiness of javascript"
    
}






// document.addEventListener("DOMContentLoaded",function(){
//     document.querySelector('button').onclick=function(){
//         document.querySelector("h2").innerHTML="this is h2"
//     }
// })

// function hello(){
//     let heading=document.querySelector("h1")
   

//     if(heading.innerHTML=="welcome to JS CLASS" ){
//        heading.innerHTML="welcome to the real bussiness of javascript" 
//     }else{

//         heading.innerHTML="welcome to JS CLASS" 
//     }
// }

document.addEventListener("DOMContentLoaded",function(){
    
// document.querySelector('button').onclick=function(){
//     let heading=document.querySelector("h1")
   

//     if(heading.innerHTML=="welcome to JS CLASS" ){
//        heading.innerHTML="welcome to the real bussiness of javascript" 
//     }else{

//         heading.innerHTML="welcome to JS CLASS" 
//     }
    
// }
// let counter=0;
// document.querySelector('button').onclick=function(){
//     counter++
//     document.querySelector("h1").innerHTML=counter
    
// if(counter==20){
//     document.querySelector("h1").innerHTML=`counter is now 20`
// }
// if(counter %10==0){
//     document.querySelector("h1").innerHTML=` the count is now ${counter}`

// }

// }
// document.querySelector("#red").onclick=function(){
//     document.querySelector("body").style.backgroundColor='red'
// }


// // }
// document.querySelector("#blue").onclick=function(){
//     document.querySelector("body").style.backgroundColor='blue'
// }


// // }
// document.querySelector("#green").onclick=function(){
//     document.querySelector("body").style.backgroundColor='green'
// }


document.querySelectorAll('button').forEach(function(button){
    button.onclick=function(){
        document.querySelector("h1").style.color=button.dataset.color
    }

})
   
    




})
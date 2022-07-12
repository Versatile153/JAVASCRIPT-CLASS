// document.addEventListener("DOMContentLoaded",function(){
//     // document.querySelector("#red").onclick=function(){
//     //     document.querySelector("h1").style.color='red'
//     // }

//     // document.querySelector(".blue").onclick=function(){
//     //     document.querySelector("h1").style.color='blue'
//     // }

//     // document.querySelector(".yellow").onclick=function(){
//     //     document.querySelector("h1").style.color='yellow'
//     // }

//     document.querySelectorAll("button").forEach(function(button){
//         button.onclick =function(){
//             document.querySelector("h1").style.color=button.dataset.color
//         }
//     })

//     document.querySelector("span").onclick=function(){
//         document.querySelector("span").style.color='red'
//     }

   

// })

let counter=0
let x=200
function count(){
    counter++
    x--
    document.querySelector("h2").innerHTML=counter
    document.querySelector("h3").innerHTML=x


        
}
setInterval(count,1000)
function showDate(){
    document.querySelector("h4").innerHTML=Date()
}



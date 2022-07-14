// const ul =document.querySelector(".items")
//  let lastChild=ul.lastElementChild
// //  let first =ul.firstElementChild
// ul.firstElementChild.remove()
//  let second=ul.children[1]
//  second.style.color='blue'
//  second.innerHTML='<h1>welcome</h1>'
//  lastChild.innerHTML=`<div>
//  <h1>welcome</h1>

//  </div>`
//  console.log(second)

// document.querySelector("select").onchange=function(){
//     document.querySelector("body").style.background=this.value

// }
// const user='versatile'

document.querySelector("#submit").disabled=true
document.querySelector("#task").onkeyup=function(){
    document.querySelector("#submit").disabled=false

}

document.querySelector('form').onsubmit=function(){
   const todo= document.querySelector("#task").value
   const li=document.createElement("li")
   li.innerHTML=todo
   document.querySelector("#tasks").append(li)
   document.querySelector("#task").value=''
   document.querySelector("#submit").disabled=true

   

   return false
   
    
}


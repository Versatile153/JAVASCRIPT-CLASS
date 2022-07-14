document.addEventListener("DOMContentLoaded",function(){
    document.querySelector("form").onsubmit=function(e){

        let name=document.querySelector("#task").value
        alert(`hello ${name}`)
        // alert('hello ${name}')
        console.log(name)
        document.querySelector("h2").innerHTML=name
        // return false
        e.preventDefault()

    }
    // let task=prompt("what is your job")
// document.querySelector("h2").innerHTML=task
})


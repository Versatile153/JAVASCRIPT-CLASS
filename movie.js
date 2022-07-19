
  let list=  document.querySelector(".movie-list")
  list.addEventListener("click",function(e){
      if(e.target.className=='delete'){
          const li=e.target.parentElement
          li.parentNode.removeChild(li)

      }
  })
  document.querySelector('form').onsubmit=function(){
    let movie=document.querySelector("#movie").value
    console.log(movie)
    let addMovie=document.createElement('span')
    addMovie.innerHTML=movie
    const deletebtn=document.createElement('span')
    deletebtn.innerText='delete'
    deletebtn.classList.add('delete')
    list.append(li)
    return false

  }

  


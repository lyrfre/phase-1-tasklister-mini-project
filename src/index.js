document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form")
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    buildToDo(e.target["new-task-description"].value)
    
    }
   )

   function buildToDo(todo){
    console.log(todo)
    let p = document.createElement("p")
    let btn = document.createElement("button")
    btn.addEventListener("click",deleteBtn)
    p.textContent = `${todo}  `
    btn.textContent = "x"
    p.appendChild(btn)
    console.log(p)
    document.querySelector("#tasks").appendChild(p)
    
   }

   function deleteBtn(e){
    e.target.parentNode.remove()
   }

});
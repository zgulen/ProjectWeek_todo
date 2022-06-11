//* ======================================================
//*                     TODO APP
//* ======================================================
const btn = document.getElementById('todo-button');
const todoInput = document.getElementById('todo-input');
const todoUl = document.getElementById('todo-ul');

let todos =JSON.parse(localStorage.getItem("todos"));

renderSavedTodos();
function renderSavedTodos(){
    todos.forEach((todo) => {
        
    });
}

window.onload = function () {
  todoInput.focus();
};

btn.addEventListener('click', (e) => {
  console.log(todoInput.value);
  if(todoInput.value){
    const todoObject = {
        id: new Date().getTime(),
        isDown: false,
        content: todoInput.value
    }

    todos.push(todoObject)
    
    localStorage.setItem("todos", JSON.stringify(todos))
    
    todoUl.innerHTML += `
    <li>
      <i class="fa fa-check"></i>
      <p>${todoInput.value}</p>
      <i class="fa fa-trash"></i>
    </li>`;
  todoInput.value = '';
  }
});

todoInput.addEventListener('keydown', (e) => {
    if(todoInput.value){
        if (e.code === 'Enter') {
    btn.click();
  }
    }
});

todoUl.addEventListener("click" , (e)=>{
    if(e.target.classList.contains("fa-trash")){
        e.target.parentElement.remove()
    }
})

todoUl.addEventListener("click" , (e)=>{
    if(e.target.classList.contains("fa-check")){
        if(e.target.parentElement.classList.contains("checked")){
            e.target.parentElement.classList.remove("checked")
        }else{
            e.target.parentElement.classList.add("checked")
        }
        // let x = document.querySelector("li")
        // x.className = "checked"
    }
})

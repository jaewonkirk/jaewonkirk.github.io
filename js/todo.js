const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

if(localStorage.getItem("todos")===null){
    const todos = [];
} else {
    const todos = JSON.parse(localStorage.getItem("todos"));
    todos.forEach(element => paintTodo(element));
}

function saveTodo(){
    localStorage.setItem("todos", JSON.stringify(todos));
}

function handleDelBtnClick(event){
    console.log(event);
    
    event.target.parentElement.remove();
}

function paintTodo(newTodo){
    const LiIdx = todoList.querySelectorAll("li").length;
    const newLi = document.createElement("li");
    const newSpan = document.createElement("span");
    const delBtn = document.createElement("button");
    newLi.appendChild(newSpan);
    newSpan.innerText = newTodo;
    newLi.appendChild(delBtn);
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", handleDelBtnClick);
    todoList.appendChild(newLi);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todos.push(newTodo);
    console.log(newTodo);
    todoInput.value = "";
    paintTodo(newTodo);
    saveTodo();
}

todoForm.addEventListener("submit", handleTodoSubmit);
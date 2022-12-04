const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

const todos = [];

if(localStorage.getItem("todos")!=null){
    JSON.parse(localStorage.getItem("todos")).forEach(element => {
        todos.push(element);
        paintTodo(element);
    });
}

function saveTodo(){
    localStorage.setItem("todos", JSON.stringify(todos));
}

function handleDelBtnClick(event){
    const delId = event.composedPath()[1].className;
    const tempTodos = [];
    while(todos[todos.length-1].genTime!=delId){
        tempTodos.push(todos.pop());
    };
    todos.pop();
    while(tempTodos.length>0){
        todos.push(tempTodos.pop());
    };
    saveTodo();
    event.target.parentElement.remove();
}

function paintTodo(newTodo){
    const LiIdx = todoList.querySelectorAll("li").length;
    const newLi = document.createElement("li");
    const newSpan = document.createElement("span");
    const delBtn = document.createElement("button");
    newLi.className = newTodo.genTime;
    newLi.appendChild(newSpan);
    newSpan.innerText = newTodo.todo;
    newLi.appendChild(delBtn);
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", handleDelBtnClick);
    todoList.appendChild(newLi);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = {
        "genTime": new Date().getTime(),
        "todo":  todoInput.value
    };
    todos.push(newTodo);
    //console.log(newTodo);
    todoInput.value = "";
    paintTodo(newTodo);
    saveTodo();
}

todoForm.addEventListener("submit", handleTodoSubmit);
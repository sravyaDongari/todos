let todoItemsContainer = document.getElementById("todoItemsContainer");
let addbutton = document.getElementById("addbutton")

let todoList = [];

function ondeletetodo(todoId) {
    let todoElement = document.getElementById("todoId");

    todoItemsContainer.removeChild(todoElement);
}
addbutton.onclick = function() {
    addtodo();
}

function ontodostatuschange(checkboxId, labelId) {
    let checkboxele = document.getElementById(checkboxId);
    console.log(checkboxele.checked);
    let labelele = document.getElementById(labelId);

    labelele.classList.toggle("checkedd");
}


function createAndAppendTodo(todo) {
    let checkboxId = "checkbox" + todo.uniqueno;
    let labelId = "label" + todo.uniqueno;
    let todoId = "todo" + todo.uniqueno;

    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoElement.id = todoId;
    todoItemsContainer.appendChild(todoElement);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = checkboxId;
    inputElement.onclick = function() {
        ontodostatuschange(checkboxId, labelId)
    }
    inputElement.classList.add("checkbox-input");
    todoElement.appendChild(inputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", checkboxId);
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    labelElement.id = labelId;
    labelContainer.appendChild(labelElement);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
    deleteIcon.onclick = function() {
        ondeletetodo(todoId);
    }
    deleteIconContainer.appendChild(deleteIcon);
}

function addtodo() {
    let count = todoList.length;
    count = count + 1;
    let userinputele = document.getElementById("todoUserInput");
    let userinputvalue = userinputele.value;

    if (userinputvalue === "") {
        alert("Enter valid text");
        return;
    }
    let newtodo = {
        text: userinputvalue,
        uniqueno: count
    }
    createAndAppendTodo(newtodo);
    userinputvalue = "";

}



for (let todo of todoList) {
    createAndAppendTodo(todo);
}

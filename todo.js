'use strict';
const todoItems = [];
const deleteSelected = document.querySelector(".delete-selected");
const toggleInput = document.querySelector("span.plus");
const toggleInputTwo = document.querySelector("span.minus");
let todoList = document.querySelector(".todo-list");
const input = document.querySelector(".add-todo");

//Add todoitem to the todoItems array when enter key is pressed
input.addEventListener("keydown", event => {
    if(event.keyCode === 13){
        addTodo();
    }
})

toggleInput.addEventListener('click', () => {
    toggleInputFunc();
})

toggleInputTwo.addEventListener('click', () => {
    toggleInputFunc();
})

//Add newTodo and append to the ul, set value of input to empty string
function addTodo() {
    let newItem = document.createElement("li");
    newItem.classList = "todo-item";
    newItem.innerHTML = `<span class="delete"><i class="fas fa-trash"></i></span>${input.value}`; 
    todoItems.push(newItem);
    todoList.appendChild(newItem);
    input.value = "";
}

//Add event listener to todo list and then use event target to specify elements
todoList.addEventListener("click", event => {
    if (event.target.classList.contains('fas')) {
        event.stopPropagation();
        event.target.parentElement.parentElement.remove();
      } else if (event.target.classList.contains('delete')) {
        event.stopPropagation();
        event.target.parentElement.remove();
      }

      if (event.target.classList.contains('todo-item')) {
        event.stopPropagation();
        event.target.classList.toggle('completed');
      }
})



function toggleInputFunc(){
    input.classList.toggle('hide');
    toggleInput.classList.toggle('hide');
    toggleInputTwo.classList.toggle('hide');
}
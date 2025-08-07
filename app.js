class Todo {
  constructor(text) {
    this.text = text;
    this.id = Date.now();
    this.complete = false;
  }

  toggleDone() {
    this.complete = !this.complete;
  }
}

class TodoApp {
  constructor() {
    this.inputElement = inputElement;
    this.listElement = listElement;
    this.todos = [];
  }

  addTodo(text) {
    // create and store new todo
    let todo = new Todo(text);
    this.todos.push(todo);
    this.#renderTodos();
  }

  removeTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  #renderTodos() {
    this.listElement.innerHTML = "";
    this.todos.forEach((todo) => {
      const li = document.createElement("li");
      li.textContent = todo.text;

      if (todo.complete) {
        li.style.textDecoration = "line-through";
      }
      this.listElement.appendChild(li);

      const completeBtn = document.createElement("button");
      completeBtn.textContent = "✓";
      completeBtn.classList.add("complete-btn");
      li.appendChild(completeBtn);

      // Delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "✗";
      deleteBtn.classList.add("delete-btn");
      li.appendChild(deleteBtn);

      deleteBtn.addEventListener("click", () => {
        this.removeTodo(todo.id);
        this.#renderTodos();
      });

      completeBtn.addEventListener("click", () => {
        todo.toggleDone();
        this.#renderTodos();
        li.style.textDecoration = "line-through";
      });
    });
  }
}

// Get references to the DOM elements
const inputElement = document.getElementById("todoInput");
const listElement = document.getElementById("todoList");

// Create an instance of the app
const app = new TodoApp(inputElement, listElement);

// Add a new todo when the button is clicked
document.getElementById("addBtn").addEventListener("click", () => {
  const text = inputElement.value.trim();
  if (text) {
    app.addTodo(text);
    inputElement.value = ""; // clear input
  }
});

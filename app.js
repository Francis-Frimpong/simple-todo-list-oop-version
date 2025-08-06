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
    // this.inputElement = inputElement;
    // this.listElement = listElement;
    this.todos = [];
  }

  addTodo(text) {
    // create and store new todo
    let todo = new Todo(text);
    this.todos.push(todo);
    console.log(this.todos);
    console.log(todo);
  }
}

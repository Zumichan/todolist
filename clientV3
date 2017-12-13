var todoList={
  todos:[],
  displayTodos: function(){
    console.log('My Todos', this.todos)
  },
  //This will add objects
  addTodo: function(todoText){
    this.todos.push({
      todoText:todoText,
      completed:false
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText){
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(position){
    this.todos.splice(position,1);
    this.displayTodos();
  },
  //This will change the completed property
  toggleCompleted: function(position){
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  }
}
 

var todos = ['item 1', 'item 2', 'item 3'];

//Function to display todos.
Function displayTodos(){
  console.log('My todos:',todos);
}

//Function to add todos.
Function addTodo(todo){
  todos.push(todo);
  displayTodos;
}

//Function to change todos.
Function changeTodo(position,newValue){
  todos[position]=newValue;
  displayTodos;
}

//Function to delete todos.
Function deleteTodo(position){
  todos.splice(position,1);
  displayTodos;
}

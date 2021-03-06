(function() {
  angular.module('todoApp', []).controller('TodoListController', function() {
    var todoList;
    todoList = this;
    todoList.todos = [
      {
        text: 'learn AngularJS',
        done: false
      },
      {
        text: 'build an Angular application',
        done: false
      }
    ];
    todoList.add = function() {
      todoList.todos.push({
        text: todoList.todoText,
        done: false
      });
      todoList.todoText = '';
    };
    todoList.remaining = function() {
      var count;
      count = 0;
      angular.forEach(todoList.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };
    todoList.archive = function() {
      var old;
      old = todoList.todos;
      todoList.todos = [];
      angular.forEach(old, function(todo) {
        if (!todo.done) {
          todoList.todos.push(todo);
        }
      });
    };
  });

  // ---
// generated by js2coffee 2.2.0

}).call(this);

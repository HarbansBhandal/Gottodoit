// this is the controller for our feature that creates a new task

angular
	.module('toDoList.create')
	.controller('CreateCtrl', CreateCtrl);

function CreateCtrl(todos) {
	var vm = this;

	// addToDo function is used to save the user's input before resetting
	// the fields back to empty
	vm.addTodo = function() {
		todos.addTodo(vm.todo.toDoItem, vm.todo.dueDate);

		vm.todo = {
			toDoItem: '',
			dueDate: ''
		}
	}

}
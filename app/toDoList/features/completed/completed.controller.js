// this is the controller for our feature that lists all the completed tasks

angular
	.module('toDoList.completed')
	.controller('CompletedCtrl', CompletedCtrl);

function CompletedCtrl(todos) {
	var vm = this;

	// set a variable to stare the data from the db
	vm.todoInfo = [];

	// use the todos service to get all our todos from the database
	todos.getTodos(vm.todoInfo);

	// when user clicks on the already completed task, change it to
	// false by using the todos service to update the database
	// which in turn bring the task back into the due state
	// the field being updated is the isCompleted field in the db
	vm.updatedStatus = function(id) {
		todos.updateTodo(id, false);
	}
}
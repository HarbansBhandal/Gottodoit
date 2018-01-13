// this is the controller for our feature that lists all the tasks

angular
	.module('toDoList.list')
	.controller('ListCtrl', ListCtrl);

function ListCtrl(todos) {
	var vm = this;

	// set a variable to stare the data from the db
	vm.todoInfo = [];

	// use the makeTheDate function to get a date w/o time component
	vm.currentDate = makeTheDate();

	// use the todos service to get all our todos from the database
	todos.getTodos(vm.todoInfo);

	// when user clicks task comleted on the list state, use the todos
	// service to change the status of isCompleted to true
	// send the id, and the status we want to update it to
	vm.updatedStatus = function(id) {
		// console.log(id);
		todos.updateTodo(id, true);
	}

	// function for getting the current date w/o the time component
	function makeTheDate() {
		var fullCurrentDate = new Date();
		// get rid of the hours part of the date
		fullCurrentDate.setHours(0, 0, 0, 0);
		return fullCurrentDate;
	}
}
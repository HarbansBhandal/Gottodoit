// our back end router file which talks to the db
// by leveraging the model

// dependencies
var ToDo = require('../model/model');
var express = require('express');
var router = express.Router();

// first the home page where we show all the todos
router.get('/', function(request, response) {

	// get all the todos
	ToDo.find({}, function(error, data) {

		// check for error getting to do list
		if (error) console.log("error getting to do list", error);

		response.json(data);
	
	}); // end of the ToDo.find function

}); // end of the / get route

// Now a post route for adding new todos
router.post('/', function(request, response) {

	// create a new todo object
	var newToDo = new ToDo({
		toDoItem: request.body.toDoItem,
		dueDate: request.body.dueDate
	});

	// save the object to the db
	newToDo.save(function (error, newToDo) {
		if (error) console.log('error saving to list', error);
		response.sendStatus(200);
	});

}); // end of the / post route

// Now a put route for updating todo as completed
router.put('/', function(request, response) {
	ToDo.findByIdAndUpdate(request.body._id, {isCompleted: request.body.isCompleted}, function(error, data) {
		if (error) console.log('error updating to do list');
		response.sendStatus(200);
	});

}); // end of the / put route


module.exports = router;
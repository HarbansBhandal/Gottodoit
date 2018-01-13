// the model of our db, used by the router

// Require mongoose
var mongoose = require("mongoose");

// require the connection
var db = require("../config/connection");

// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
var ToDoSchema = new Schema({
  // toDoItem is a required string
  toDoItem: {
    type: String,
    required: true,
  },
  // date is due date
  dueDate: {
    type: Date,
    required: true,
  },
  // whether it is completed
  isCompleted: {
    type: Boolean,
    default: false
  }
});

// Create the ToDo model with the ToDoSchema
var ToDo = mongoose.model("ToDo", ToDoSchema);

// Export the model
module.exports = ToDo;
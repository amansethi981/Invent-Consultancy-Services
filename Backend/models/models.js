const mongoose = require("mongoose");

const NewTodo = new mongoose.Schema({
  title:{
    description:{
      title:String
    },
    type: String,
    trim: true,
    required: true,
    maxlength: 2000,
  },
  
});

module.exports = mongoose.model("NewTodo", NewTodo);

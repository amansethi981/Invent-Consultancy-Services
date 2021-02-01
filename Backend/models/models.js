const mongoose = require("mongoose");

const NewTodo = new mongoose.Schema({
  title:{
    type: String,
    trim: true,
    required: true,
    maxlength: 2000,
  },
  children: [
    {
      name: {
        type: String
      },
      createdAt: {
        type: Date,
        default: new Date()
      }
    }
  ]
  
});

module.exports = mongoose.model("NewTodo", NewTodo);

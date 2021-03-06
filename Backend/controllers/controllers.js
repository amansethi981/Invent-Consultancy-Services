const NewTodo = require("../models/models");

exports.createTodo = async (req, res) => {
  const { title, description } = req.body;
  console.log(req.body);
  try {
    let newtodo = new NewTodo({ title, description });
    let article = await newtodo.save();
    console.log(article);
    return res.status(200).json({
      msg: "Created Todo",
      data: newtodo,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      errors: "Some eroror occured",
    });
  }
};

exports.getAllTodo = (req, res) => {
  NewTodo.find().exec((err, todo) => {
    if (err) {
      return res.status(400).json({
        errors: "No Todo found",
      });
    }
    res.json(todo);
  });
};

exports.getTodoByID = async (req, res) => {
  const TodoId = req.params.todoId;
  
  let todo;
  try {
    todo = await NewTodo.findById(TodoId);
    console.log(todo);
  } catch (err) {
    console.log(err);
  }
  res.json(todo);
};

exports.updatetodo = async (req, res) => {
  const { title } = req.body;
  console.log(req.body);
  const todoId = req.params.todoId;
  console.log(todoId);
  let todo;
  try {
    todo = await NewTodo.findById(todoId);
  } catch (error) {
    console.log(error);
  }
  todo.title = title;
  try {
    await todo.save();
  } catch (error) {
    console.log(error);
  }
  res.status(200).json(todo);
};

exports.removetodo = async (req, res) => {
  const todoId = req.params.todoId;
  console.log(todoId);
  let todo;
  try {
    todo = await NewTodo.findById(todoId);
  } catch (error) {
    console.log(error);
  }
  try {
    await NewTodo.deleteOne({ _id: todoId });
  } catch (error) {
    console.log(error);
  }
  res.json({
    message: "Successfull deleted",
  });
};

exports.createchild=async(req,res)=>{
  console.log("sss");
  console.log(req.params);
  let result;
  try {
    const todoId=req.params.todoId;
    console.log(todoId)
    const obj = {
      name: req.body.title,
      createdAt: new Date()
    }
     result=await NewTodo.findByIdAndUpdate(todoId,{$push:{children: obj}}, {new : true})
     console.log(result);
  } catch (error) {
    console.log(error);
  }
  res.json({result})
}

exports.childupdatetodo = async (req, res) => {
  const { title } = req.body;
  console.log(req.body.title);
  const todoId = req.params.todoId;
  const childId = req.params.childId
  console.log(todoId);
  const obj = {
    name: req.body.title,
    createdAt: new Date()
  }
  let todo;
  try {
    todo = await NewTodo.findOneAndUpdate({_id: todoId, "children._id": childId},{$set:{"children.$.name": obj.name}}, {new : true})
    console.log(todo)
  } catch (error) {
    console.log(error);
  }
  console.log(todo);
  // todo.title = title;
  // try {
  //   await todo.save();
  // } catch (error) {
  //   console.log(error);
  // }
  res.status(200).json(todo);

};

exports.deletechildtodo=async(req,res)=>{
  const todoId=req.params.todoId;
  console.log(todoId);
  const childId = req.params.childId
  let todo;
  try {
    todo=await NewTodo.updateOne({_id:todoId,"children._id":childId},{$pull:{children:{}}}, {new : true})

    console.log(todo);
  } catch (error) {
    console.log(error);
  }
  res.json({
    message: "Successfull deleted",
  });
}
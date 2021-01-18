const NewTodo=require("../models/models")

exports.getTodoById=(req,res,id,next)=>{
  console.log(id);
    NewTodo.findById(id)
    .exec((err,todo)=>{
        if (err) {
            return res.status(400).json({
              errors: "No Todo found",
            });
          }
          req.NewTodo=todo;
          next();
    })
}
exports.createTodo = async (req, res) => {
  const { title} = req.body;
 // console.log(req.body);
  try {
    let newtodo = new NewTodo({ title});
    let article = await newtodo.save();
    // console.log(article);
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
  NewTodo.find()
    .exec((err, todo) => {
      if (err) {
        return res.status(400).json({
          errors: "No Todo found",
        });
      }
      res.json(todo);
    });
};
  
exports.removetodo = (req, res) => {
  const newtodo=req.NewTodo;
  console.log(newtodo);
    newtodo.remove((err, todo) => {
      if (err) {
        return res.status(400).json({
          error: "Failed to delete this todo"
        });
      }
      res.json({
        message: "Successfull deleted"
      });
    });
  };
 exports.getTodo = (req, res) => {
      console.log(req.body);
    return res.json(req.body);
  };
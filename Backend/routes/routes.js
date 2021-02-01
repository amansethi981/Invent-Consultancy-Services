const express = require("express");
const router = express.Router();

const {
  createTodo,getAllTodo,getTodoById
  ,removetodo,getTodoByID,updatetodo,createchild,childupdatetodo,deletechildtodo
} = require("../controllers/controllers");
// router.param("todoId",getTodoById)
router.post("/todo", createTodo);
router.get("/todo", getAllTodo);
router.get("/todo/:todoId",getTodoByID);
router.put("/todo/child/:todoId/:childId",childupdatetodo)
router.delete("/todo/child/:todoId/:childId",deletechildtodo)
router.delete("/todo/:todoId",removetodo);
router.put("/todo/:todoId",updatetodo);
router.post("/todo/child/:todoId",createchild)
module.exports = router;

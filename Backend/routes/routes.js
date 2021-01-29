const express = require("express");
const router = express.Router();

const {
  createTodo,getAllTodo,getTodoById
  ,removetodo,getTodoByID,updatetodo
} = require("../controllers/controllers");
// router.param("todoId",getTodoById)
router.post("/todo", createTodo);
router.get("/todo", getAllTodo);
router.get("/todo/:todoId",getTodoByID);
router.delete("/todo/:todoId",removetodo);
router.put("/todo/:todoId",updatetodo);
module.exports = router;

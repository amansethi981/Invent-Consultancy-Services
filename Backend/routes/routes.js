const express = require("express");
const router = express.Router();

const {
  createTodo,getAllTodo,getTodoById
  ,removetodo,getTodo
} = require("../controllers/controllers");
router.param("todoId",getTodoById)
router.post("/todo", createTodo);
router.get("/todo", getAllTodo);
router.get("/todo/:todoId",getTodo);
router.delete("/todo/:todoId",removetodo);
module.exports = router;

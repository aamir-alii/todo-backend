const express = require("express");
const { todoController } = require("../controllers/");
const todoRouter = express.Router();

todoRouter
  .route("/")
  .get(todoController.getAllTodo)
  .post(todoController.createTodo)
  .patch(todoController.updateTodo)
  .delete(todoController.deleteTodo);

todoRouter.get("/:id", todoController.getSingleTodo);

module.exports = todoRouter;

const { TodoConfiguration } = require("../models");
const { apiResponse } = require("../utils");

const createTodo = async (req, res) => {
  try {
    const { title } = req.body;
    console.log(req.body);
    if (!title) {
      return apiResponse(res, 400, false, "Title is required field");
    }
    const todo = await TodoConfiguration.create({
      title,
      status: "Pending",
    });

    return apiResponse(res, 201, true, "Todo created successfully", todo);
  } catch (error) {
    return apiResponse(
      res,
      500,
      false,
      error?.message ?? "Something  Went Wrong!",
      null
    );
  }
};

const getSingleTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await TodoConfiguration.findByPk(id);
    if (!todo) {
      return apiResponse(res, 404, false, `Todo not found with id "${id}"`);
    }
    return apiResponse(res, 200, true, "Todo details", todo);
  } catch (error) {
    return apiResponse(
      res,
      500,
      false,
      error?.message ?? "Something  Went Wrong!",
      null
    );
  }
};

const getAllTodo = async (req, res) => {
  try {
    const todos = await TodoConfiguration.findAll();
    return apiResponse(res, 200, true, `${todos.length} todos found`, todos);
  } catch (error) {
    return apiResponse(
      res,
      500,
      false,
      error?.message ?? "Something  Went Wrong!",
      null
    );
  }
};

const updateTodo = async (req, res) => {
  try {
    const id = req.query.id;
    const { title, status } = req.body;
    const todo = await TodoConfiguration.findByPk(id);

    if (!todo) {
      return apiResponse(res, 404, false, `Todo not found with id "${id}"`);
    }
    await todo.update({
      title,
      status,
    });
    return apiResponse(res, 200, true, "Todo updated successfully");
  } catch (error) {
    return apiResponse(
      res,
      500,
      false,
      error?.message ?? "Something  Went Wrong!",
      null
    );
  }
};

const deleteTodo = async (req, res) => {
  try {
    const id = req.query.id;
    const todo = await TodoConfiguration.findByPk(id);
    if (!todo) {
      return apiResponse(res, 404, false, `Todo not found with id "${id}"`);
    }
    await todo.destroy();
    return apiResponse(res, 200, true, "Todo deleted succesfully");
  } catch (error) {
    return apiResponse(
      res,
      500,
      false,
      error?.message ?? "Something  Went Wrong!",
      null
    );
  }
};

module.exports = {
  createTodo,
  getSingleTodo,
  getAllTodo,
  updateTodo,
  deleteTodo,
};

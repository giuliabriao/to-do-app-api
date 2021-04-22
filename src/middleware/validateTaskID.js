const TasksDAO = require("../DAO/tasks-dao");
const db = require("../infra/sqlite-db");

async function validateTaskId(req, res, next) {

  const tasksDAO = new TasksDAO(db);

  const { id } = req.params;
  const task = await tasksDAO.listTaskById(id);

  if (task) {
    req.task = task;
    next();
  } else {
    res.status(404).json({ message: "ID not found." })
  }
}

module.exports = validateTaskId;
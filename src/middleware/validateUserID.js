const UsersDAO = require("../DAO/users-dao");
const db = require("../infra/sqlite-db");

async function validateUserId(req, res, next) {

  const usersDAO = new UsersDAO(db);

  const { id } = req.params;
  const user = await usersDAO.listUserById(id);

  if (user) {
    req.user = user;
    next();
  } else {
    res.status(404).json({ message: "ID not found." })
  }
}

module.exports = validateUserId;
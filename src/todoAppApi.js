const express = require('express');
const app = express();
const port = 3000;

const taskController = require('./controller/tarefa-controller');
const userController = require('./controller/usuario-controller');

userController(app);
taskController(app);

//esse listen escuta a porta que ele fica escutando uma callback
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
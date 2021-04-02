// Express v4.16.0 and higher
// --------------------------
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const taskController = require('./controller/tarefa-controller');
const userController = require('./controller/usuario-controller');

userController(app);
taskController(app);

//esse listen escuta a porta que ele fica escutando uma callback
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
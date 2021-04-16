// Express v4.16.0 and higher
// --------------------------
const express = require('express');
const bodyParser = require('body-parser');
// const bd = require("./infra/bd");
const db = require('./infra/sqlite-db');

const app = express();
const port = 3000;

//COLOCAR O MIDDLEWARE AQUI

// app.use(function(req, re, next){
  
// })

app.use(bodyParser.json());

const taskController = require('./controller/tarefa-controller');
const userController = require('./controller/usuario-controller');

userController(app, db);
taskController(app, db);

//esse listen escuta a porta que ele fica escutando uma callback
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
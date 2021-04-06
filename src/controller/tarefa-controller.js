const TaskModel = require("../model/TaskModel");

function taskController(app, bd) {
  app.get("/task", (req, res) => {

    const tasks = bd.tasks
    res.send(tasks)
    // res.send(`Rota ativada com GET e recurso task: valores de task devem ser retornados.`) //aqui poderia ser passado um objeto!!
  });

  app.post("/task", (req, res) => {
    const body = req.body;
    let task = new TaskModel(body.id, body.title, body.description, body.status, body.date);

    if (body.id && body.title && body.description && body.status && body.date) {
      bd.tasks.push(task);

      console.log(JSON.stringify(task));
      res.send(task); //essa parte retorna o que foi criado de forma a entender que deu bom
    };

    resp.send("Deu ruim!");
  });
};

module.exports = taskController;
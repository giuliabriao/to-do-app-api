const routeTask = 'task';

  function taskController(app){
    app.get(`/${routeTask}`, (req, res) => {
        res.send(`Rota ativada com GET e recurso ${routeTask}: valores de ${routeTask} devem ser retornados.`) //aqui poderia ser passado um objeto!!
      });
  }

  module.exports = taskController
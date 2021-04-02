  function taskController(app){
    app.get("/task", (req, res) => {
        res.send(`Rota ativada com GET e recurso task: valores de task devem ser retornados.`) //aqui poderia ser passado um objeto!!
      });
    
      app.post("/task", (req, res) => {
        res.send(`Rota ativada com POST e recurso task: valores de task devem ser retornados.`) //aqui poderia ser passado um objeto!!
      });
  }

  module.exports = taskController;
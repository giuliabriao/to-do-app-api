const express = require('express')
const app = express()
const port = 3000
const routeUser = 'user';
const routeTask = 'task';

app.get(`/${routeUser}`, (req, res) => {
  res.send(`Rota ativada com GET e recurso ${routeUser}: valores de ${routeUser} devem ser retornados.`) //aqui poderia ser passado um objeto!!
})

app.get(`/${routeTask}`, (req, res) => {
    res.send(`Rota ativada com GET e recurso ${routeTask}: valores de ${routeTask} devem ser retornados.`) //aqui poderia ser passado um objeto!!
  })

//esse listen escuta a porta que ele fica escutando uma callback
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
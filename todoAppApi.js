const express = require('express')
const app = express()
const port = 3000
const route = 'user'; 

app.get(`/${route}`, (req, res) => {
  res.send(`Rota ativada com GET e recurso ${route}: valores de ${route} devem ser retornados.`) //aqui poderia ser passado um objeto!!
})

//esse listen escuta a porta que ele fica escutando uma callback
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}/${route}`)
});
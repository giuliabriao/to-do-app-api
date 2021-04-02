function userController(app){
app.get("/user", (req, resp) => {
    resp.send(`Rota ativada com GET e recurso user: valores de user devem ser retornados. Rastreamento da aplicação usando nodemon`) //aqui poderia ser passado um objeto!!
    });

app.post("/user", (req, resp) => {
    console.log('[INFO] chegou um post aqui');
    // res.send(`Rota ativada com POST e recurso user: valores de user devem ser retornados. Rastreamento da aplicação usando nodemon`) //aqui poderia ser passado um objeto!!
    resp.send(req.body);
    });
};

module.exports = userController;
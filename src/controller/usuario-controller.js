const routeUser = 'user';

function userController(app){
app.get(`/${routeUser}`, (req, res) => {
    res.send(`Rota ativada com GET e recurso ${routeUser}: valores de ${routeUser} devem ser retornados.`) //aqui poderia ser passado um objeto!!
    });
};

module.exports = userController;
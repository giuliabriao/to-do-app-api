const UserModel = require("../model/UserModel");
const UsersDAO = require("../DAO/users-dao");

function userController(app, db) {
    const userDAO = new UsersDAO(db);

    app.get('/users', (req, res) => {

        userDAO.listUsers()
            .then(users => res.send(users))
            .catch(error => res.send(error))
    });

    app.get('/users/:id', (req, res) => {

        userDAO.listUserById(req.params.id)
            .then(users => res.send(users))
            .catch(error => res.send(error))
    });

    app.post('/users', (req, res) => {
        const body = req.body;

        const userModel = new UserModel(0, body.name, body.email, body.password);

        userDAO.insertUser(userModel)
            .then(result => res.send(result))
            .catch(error => res.send(error))

    });

    app.put('/users/:id', (req, res) => {
        const body = req.body;
        const id = req.params.id;
        const userModel = new UserModel(0, body.name, body.email, body.password);

        userDAO.updateUser(id, userModel)
            .then(result => res.send(result))
            .catch(error => res.send(error))

    });

    app.delete('/users/:id', (req, res) => {
        const id = req.params.id;

        userDAO.deleteUser(id)
            .then(result => res.send(result))
            .catch(error => res.send(error))

    });
};

module.exports = userController;
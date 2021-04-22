const UserModel = require("../model/UserModel");
const UsersDAO = require("../DAO/users-dao");

async function userController(app, db) {
    const userDAO = new UsersDAO(db);

    app.get('/users', async (req, res) => {
        try {
            const usersGet = await userDAO.listUsers();
            res.send(usersGet); 
        } catch (error) {
            res.status(503).send({"message": error});
        }

        // userDAO.listUsers()
        //     .then(users => res.send(users))
        //     .catch(error => res.send(error))
    });

    app.get('/users/:id', async (req, res) => {
        try {
            const body = req.body;
            const id = req.params.id;
            const userById = await userDAO.listUserById(id);

            if(!userById){
                res.status(404).send("[ERROR] Ops, this id does not exists!");
                return;
            }

            res.send(userById);
        } catch (error) {
            res.status(503).send({"message": error});
        }
    });

    app.post('/users', async (req, res) => {
        try {
            const body = req.body;
            const userModel = new UserModel(0, body.name, body.email, body.password);

            const usersPost = await userDAO.insertUser(userModel);
            res.send(usersPost);
        } catch (error) {
            res.status(503).send({"message": error});
        }
    });

    app.put('/users/:id', async (req, res) => {
        try {
            const body = req.body;
            const id = req.params.id;
            const userModel = new UserModel(0, body.name, body.email, body.password);

            let usersPut = await userDAO.updateUser(id, userModel);
            res.send(usersPut);
        } catch (error) {
            res.status(503).send({"message": error});
        }
    });

    app.delete('/users/:id', async (req, res) => {
        try {
            const body = req.body;
            const id = req.params.id;

            const usersDelete = await userDAO.deleteUser(id);
            res.send(usersDelete);
        } catch (error) {
            res.status(503).send({"message": error});
        }
    });
};

module.exports = userController;
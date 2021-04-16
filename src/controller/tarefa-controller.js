const TaskModel = require("../model/TaskModel");
const TasksDAO = require("../DAO/tasks-dao");

function taskController(app, db) {
    const tasksDAO = new TasksDAO(db);

    app.get('/tasks', (req, res) => {

        tasksDAO.listTasks()
            .then(tasks => res.send(tasks))
            .catch(error => res.send(error))
    });

    app.get('/tasks/:id', (req, res) => {

        tasksDAO.listTaskById(req.params.id)
            .then(tasks => res.send(tasks))
            .catch(error => res.send(error))
    });

    app.post('/tasks', (req, res) => {
        const body = req.body;

        const taskModel = new TaskModel(0, body.title, body.description, body.status, body.date, body.id_user);

        tasksDAO.insertTask(taskModel)
            .then(result => res.send(result))
            .catch(error => res.send(error))

    });

    app.put('/tasks/:id', (req, res) => {
        const body = req.body;
        const id = req.params.id;
        const taskModel = new TaskModel(0, body.title, body.description, body.status, body.date, body.id_user);

        tasksDAO.updateTask(id, taskModel)
            .then(result => res.send(result))
            .catch(error => res.send(error))

    });

    app.delete('/tasks/:id', (req, res) => {
        const id = req.params.id;

        tasksDAO.deleteTask(id)
            .then(result => res.send(result))
            .catch(error => res.send(error))

    });
};

module.exports = taskController;
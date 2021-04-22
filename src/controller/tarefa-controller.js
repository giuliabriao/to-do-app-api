const TaskModel = require("../model/TaskModel");
const TasksDAO = require("../DAO/tasks-dao");
const validateTaskId = require("../middleware/validateTaskID");

function taskController(app, db) {
    const tasksDAO = new TasksDAO(db);

    app.get('/tasks', async (req, res) => {
        try {
            const taskGet = await tasksDAO.listTasks();
            res.send(taskGet);

        } catch (error) {
            res.status(503).send({ "message": error });
        }
    });

    app.get('/tasks/:id', validateTaskId, async (req, res) => {
        try {
            const id = req.params.id;
            const taskById = await tasksDAO.listTaskById(id);
            
            res.send(taskById);

        } catch (error) {
            res.status(503).send({ "message": error });
        }
    });

    app.post('/tasks', async (req, res) => {
        try {
            const body = req.body;

            const taskModel = new TaskModel(0, body.title, body.description, body.status, body.date, body.id_user);

            const taskPost = await tasksDAO.insertTask(taskModel)
            res.send(taskPost);
        } catch (error) {
            res.status(503).send({ "message": error });
        }
    });

    app.put('/tasks/:id', validateTaskId, async (req, res) => {
        try {
            const body = req.body;
            const id = req.params.id;
            const taskModel = new TaskModel(0, body.title, body.description, body.status, body.date, body.id_user);

            const taskPut = await tasksDAO.updateTask(id, taskModel);
            res.send(taskPut);
        } catch (error) {
            res.status(503).send({ "message": error });
        }
    });

    app.delete('/tasks/:id', validateTaskId, async (req, res) => {
        try {
            const id = req.params.id;

            const taskDelete = await tasksDAO.deleteTask(id);
            res.send(taskDelete);
        } catch (error) {
            res.status(503).send({ "message": error });
        }
    });
};

module.exports = taskController;
const TaskModel = require("../model/TaskModel");

class TasksDAO {
    constructor(db) {
        this._db = db;
    }

    get db() {
        return this._db;
    }

    listTasks() {
        return new Promise((resolve, reject) => {

            const sql = "SELECT * FROM TASKS";

            this.db.all(sql, (err, tasks) => {
                    if (err) {
                        reject(err)
                    } else {
                        console.log(tasks)
                        let tasksModel = tasks.map(task => new TaskModel(task.ID, task.TITLE, task.DESCRIPTION, task.STATUS, task.DATE, task.ID_USER))
                        resolve(tasksModel)
                    }
                }
            )
        })
    }

    listTaskById(id) {
        return new Promise((resolve, reject) => {

            const sql = "SELECT * FROM TASKS WHERE ID = ?";

            this.db.get(sql, id, (err, task) => {
                    if (err) {
                        reject(err)
                    } else {
                        let taskModel = new TaskModel(task.ID, task.TITLE, task.DESCRIPTION, task.STATUS, task.DATE, task.ID_USER)
                        resolve(taskModel)
                    }
                }
            )
        })
    }
   
    insertTask(task) {
        return new Promise((resolve, reject) => {

            const sql = 'INSERT INTO TASKS (TITLE, DESCRIPTION, STATUS, DATE, ID_USER) VALUES (?, ?, ?, ?, ?)';

            this.db.run(sql, [task.title, task.description, task.status, task.date, task.id_user], (error) => {
                if (error) {
                    reject(`Error by adding task: ${error}`);
                } else {
                    resolve(task);
                };
            });
        })
    }

    updateTask(id, task){
        return new Promise((resolve, reject) => {

            const sql = "UPDATE TASKS SET TITLE = ?, DESCRIPTION = ?, STATUS = ?, DATE = ?, ID_USER = ? WHERE ID = ?";

            this.db.run(sql, [task.title, task.description, task.status, task.date, task.id_user, id], (error) => {
                if(error){
                    reject(error);
                }else{
                    resolve("Task successfully updated!");
                }
            })
        })
    }

    deleteTask(id){
        return new Promise((resolve, reject) => {

            const sql = "DELETE FROM TASKS WHERE ID = ?"

            this.db.run(sql, id, (error) => {
                if(error){
                    reject(error);
                }else{
                    resolve("Task successfully deleted!");
                }
            })
        })
    }
}

module.exports = TasksDAO;

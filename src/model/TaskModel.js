class TaskModel{
    constructor(id, title, description, status, date, id_user){
        this.id = id,
        this.title = title,
        this.description = description,
        this.status = status,
        this.date = date
        this.id_user = id_user
    };
};

module.exports = TaskModel;
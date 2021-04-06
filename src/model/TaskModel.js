class TaskModel{
    constructor(id, title, description, status, date){
        this._id = id,
        this._title = title,
        this._description = description,
        this._status = status,
        this._date = date
    };

    get id(){
        return this._id;
    };

    get title(){
        return this._title;
    };

    get description(){
        return this._description;
    };

    get status(){
        return this._status;
    };

    get date(){
        return this._date;
    };
};

module.exports = TaskModel;
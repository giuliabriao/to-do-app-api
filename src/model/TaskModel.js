class TaskModel{
    constructor(id, title, descricao, status, date){
        this._id = id,
        this._title = title,
        this._descricao = descricao,
        this._status = status,
        this._date = date
    };

    get id(){
        return this._id;
    };

    get title(){
        return this._title;
    };

    get descricao(){
        return this._descricao;
    };

    get status(){
        return this._status;
    };

    get date(){
        return this._date;
    };
};
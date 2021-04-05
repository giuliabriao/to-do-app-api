class UserModel{
    constructor(id, name, email){
        this._id = id,
        this._name = name,
        this._email = email
    };

    get id(){
        return this._id;
    }

    get name(){
        return this._name;
    }

    get email(){
        return this._email;
    }
};
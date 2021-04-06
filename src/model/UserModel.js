class UserModel{
    constructor(id, name, email, password){
        this._id = id,
        this._name = name,
        this._email = email,
        this._password = password
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

    get password(){
        return this._password;
    }
};

module.exports = UserModel;
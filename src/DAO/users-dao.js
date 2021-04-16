const UserModel = require("../model/UserModel");

class UsersDAO {
    constructor(db) {
        this._db = db;
    }

    get db() {
        return this._db;
    }

    listUsers() {
        return new Promise((resolve, reject) => {

            const sql = "SELECT * FROM USERS";

            this.db.all(sql, (err, users) => {
                    if (err) {
                        reject(err)
                    } else {
                        console.log(users)
                        let usersModel = users.map(user => new UserModel(user.ID, user.NAME, user.EMAIL, user.PASSWORD))
                        resolve(usersModel)
                    }
                }
            )
        })
    }

    listUserById(id) {
        return new Promise((resolve, reject) => {

            const sql = "SELECT * FROM USERS WHERE ID = ?";

            this.db.get(sql, id, (err, user) => {
                    if (err) {
                        reject(err)
                    } else {
                        let userModel = new UserModel(user.ID, user.NAME, user.EMAIL, user.PASSWORD)
                        resolve(userModel)
                    }
                }
            )
        })
    }
   
    insertUser(user) {
        return new Promise((resolve, reject) => {

            const sql = 'INSERT INTO USERS (NAME, EMAIL, PASSWORD) VALUES (?, ?, ?)';

            this.db.run(sql, [user.name, user.email, user.password], (error) => {
                if (error) {
                    reject(`Error by adding user: ${error}`);
                } else {
                    resolve(user);
                };
            });
        })
    }

    updateUser(id, user){
        return new Promise((resolve, reject) => {

            const sql = "UPDATE USERS SET NAME = ?, EMAIL = ?, PASSWORD = ? WHERE ID = ?"

            this.db.run(sql, [user.name, user.email, user.password, id], (error) => {
                if(error){
                    reject(error);
                }else{
                    resolve("User successfully updated!");
                }
            })
        })
    }

    deleteUser(id){
        return new Promise((resolve, reject) => {

            const sql = "DELETE FROM USERS WHERE ID = ?"

            this.db.run(sql, id, (error) => {
                if(error){
                    reject(error);
                }else{
                    resolve("User successfully deleted!");
                }
            })
        })
    }
}

module.exports = UsersDAO;

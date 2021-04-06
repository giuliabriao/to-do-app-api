const UserModel = require("../model/UserModel");


function userController(app, bd){
app.get("/user", (req, resp) => {

    const users = bd.users
    resp.send(users) //aqui poderia ser passado um objeto!!
    });

app.post("/user", (req, resp) => {

    const body = req.body;
    let user = new UserModel(body.id, body.name, body.email, body.password);

    if(body.id && body.name && body.email && body.password){
        bd.users.push(user);
        
        console.log(JSON.stringify(user));
        resp.send(user); //essa parte retorna o que foi criado de forma a entender que deu bom
        };
        
    resp.send("Deu ruim!");
    });
};

module.exports = userController;
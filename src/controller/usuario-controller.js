const UserModel = require("../model/UserModel");

function userController(app, bd) {
    app.get("/user", (req, resp) => {

        bd.all("SELECT * FROM USUARIOS", function(err, rows){
            if(err){
                throw new Error(`Erro ao rodar consulta: ${err}`)
            }else{
                // const users = bd.users
                console.log(rows);
                resp.send(rows) //aqui poderia ser passado um objeto!!
            };
        });
    });

    app.get("/user/:email", (req, resp) => {

        const users = bd.users;
        const email = req.params.email;

        const user = users.find(user => user.email == email)
        
        resp.send(user) //aqui poderia ser passado um objeto!!
    });

    app.post("/user", (req, resp) => {

        const body = req.body;
        let user = new UserModel(body.id, body.name, body.email, body.password);

        if (body.id && body.name && body.email && body.password) {
            bd.users.push(user);

            console.log(JSON.stringify(user));
            resp.send(user); //essa parte retorna o que foi criado de forma a entender que deu bom
        };

        resp.send("Deu ruim!");
    });

    app.delete('/user/:email', (req, resp) => {
        
        const users = bd.users;
        const email = req.params.email;

        for(let i = 0; i < users.length; i++){
            if(email === users[i].email){
                users.splice(i, 1);
            };
        };

        resp.send(`{"Mensagem: "<${email} deletado}`)
    });

    app.put('/user/:email', (req, resp) => {
        
        const body = req.body.email;
        let users = bd.users;
        const email = req.params.email;

        for(let i = 0; i < users.length; i++){
            if(email === users[i].email){
                users = body;
            };
        };

        resp.send(`{"Mensagem: "<${email} atualizado}`)
    });
};

module.exports = userController;
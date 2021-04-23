# API de ToDo App

## Este projeto de fim de módulo consiste numa API de usuários e tarefas para um app de ToDo
<br>
### 🔎 <strong>Instalando as dependências</strong>

Primeiramente deve-se clonar o repositório para sua máquina, com o seguinte comando no Git:

```shell
git clone https://github.com/giuliabriao/to-do-app-api.git
```
Agora, instale as dependências do projeto escrevendo:

```shell
npm install
```

### 🔎 <strong>Como executar</strong>

É preciso adicionar o banco indo até a pasta referente ao banco (``create-and-populate.js``) executando o comando:

```shell
cd .\src\
```
```shell
cd .\infra 
```
```shell
node .\create-and-populate.js
```

Em sequência, você poderá utilizar um programa que teste as requisições de GET, POST, PUT e DELETE, como Postman e Insomnia por exemplo.

Como o projeto possui duas entidades: usuários e tarefas, temos caminhos para acessar, inserir, editar e deletar em cada um desses bancos.

<strong><p style="text-align: center">🤓 USUÁRIOS</p></strong>

```js
GET: "http://localhost:3000/users"
GET: "http://localhost:3000/users/<passeAIdAqui>"

POST: "http://localhost:3000/users"
//aqui escreva no body da requisição os novos dados

PUT: "http://localhost:3000/users/<passeAIdAqui>"
//aqui escreva no body da requisição a atualização dos dados

DELETE: "http://localhost:3000/users/<passeAIdAqui>"
```

<strong><p style="text-align: center">🗒️ TAREFAS</p></strong>

```js
GET: "http://localhost:3000/tasks"
GET: "http://localhost:3000/tasks/<passeAIdAqui>"

POST: "http://localhost:3000/tasks"
//aqui escreva no body da requisição os novos dados

PUT: "http://localhost:3000/tasks/<passeAIdAqui>"
//aqui escreva no body da requisição a atualização dos dados

DELETE: "http://localhost:3000/tasks/<passeAIdAqui>"
```

### 📌 <strong>Sobre o projeto</strong>

Esta API foi feita usando **JavaScript**, **NodeJs (versão v14.16.0)**, **Express**, **SQLite3 (versão 5.0.2)** como biblioteca que simula um banco de dados. Foi utilizado também o padrão de **Models e Controllers**.

Para ambas as entidades, de usuários e tarefas, foi feito uma Model definindo suas informações principais com base no banco de dados, inclusive a id de cada um deles é incrementada automaticamente.

Utilizamos um design pattern, o **DAO** (Data Acess Object), para organizar o código e separar os funções de requisição do controller das transações no banco (por meio de querys - CRUD), retornando o resultado. Foi utilizado um processamento assíncrono com Promise porque não é esperado que a aplicação "trave" esperando resposta.

Cada método na classe de cada entidade se relaciona com os verbos HTTP, para que no Controller possamos focar em fazer as requisições utilizando **async/await**, importando o DAO de cada entidade e utilizando os métodos específicos para cada verbo.

E para validar as IDs passadas como parâmetro, criei um **middleware** que verifica se aquela ID existe e, senão, envia uma mensagem de erro antes de executar no controller.

### 🚀 <strong>Tecnologias</strong>
As seguintes ferramentas foram usadas na construção do projeto até o presente momento:

- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [NodeJS](https://nodejs.org/en/)
- [Express](https://www.npmjs.com/package/express)
- [SQLite3](https://www.npmjs.com/package/sqlite3)
- [DAO](https://www.oracle.com/java/technologies/data-access-object.html)

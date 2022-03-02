const express = require('express');
const app = express();

// CREATE, READ, UPDATE, DELETE
// POST    GET   PUT     DELETE

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar Formulario</button>
    </form>
    `)
});

app.post('/', (req, res) => {
    res.send("Recebi o formulário")
})

app.get('/contato', (req, res) => {
    res.send("Contato")
})

app.listen(3000, () => {
    console.log("servidor on")
});

//utilizar o start do package.json para executar o comando 'nodemon server.js' (assistir e atualizar servidor em tempo real)
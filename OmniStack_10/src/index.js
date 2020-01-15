const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect("mongodb+srv://jonas:147258@cluster0-9q0pm.mongodb.net/week10?retryWrites=true&w=majority", 
{useNewUrlParser: true, useUnifiedTopology: true});

app.use(express.json());

// Tipos de parâmetros do express:

 // Query Params: na URL ?. request.query (Filtros, Ordenação, Paginação, ...)
 // Route Params: divisao por /. request.params (Identificar um recurso na alteração ou remoção)
 // Body: Dados para a criação ou alteração de registro

// MongoDB (Não-Relacional)

app.listen(3333);
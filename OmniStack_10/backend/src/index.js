const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http'); 

const routes = require("./routes");
const {setupWebSocket} = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebSocket(server);

// Conexão MongoDB
mongoose.connect("mongodb+srv://jonas:147258@cluster0-9q0pm.mongodb.net/week10?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useCreateIndex', true);

app.use(cors())
app.use(express.json());
app.use(routes);

server.listen(3333); 


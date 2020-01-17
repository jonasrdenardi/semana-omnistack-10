const express = require('express');
const mongoose = require('mongoose');
const routes = require("./routes");

const app = express();
// MongoDB (Não-Relacional)
mongoose.connect("mongodb+srv://jonas:147258@cluster0-9q0pm.mongodb.net/week10?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useCreateIndex', true);
app.use(express.json());
app.use(routes);

app.listen(3333); 


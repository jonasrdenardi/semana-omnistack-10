const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require("./routes");

const app = express();
// Conexão MongoDB
mongoose.connect("mongodb+srv://jonas:147258@cluster0-9q0pm.mongodb.net/week10?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useCreateIndex', true);

app.use(cors())
app.use(express.json());
app.use(routes);

app.listen(3333); 


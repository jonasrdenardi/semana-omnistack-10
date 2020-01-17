const {Router} = require('express');

const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index)

module.exports = routes;

// Tipos de parâmetros do express:

 // Query Params: na URL ?. request.query (Filtros, Ordenação, Paginação, ...)
 // Route Params: divisao por /. request.params (Identificar um recurso na alteração ou remoção)
 // Body: Dados para a criação ou alteração de registro
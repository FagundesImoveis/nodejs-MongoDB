const { Router } = require('express');
const routes = Router();
const multer = require('multer');
const ConfigsMulter = require('./src/config/multer'); 
const houtesGet = require('./src/controllers/housesget.controller');
const PostarImoveis = require('./src/controllers/postImoveis.controller');
const Search = require('./src/controllers/SearchImoveis.controller');

routes.post('/send', multer(ConfigsMulter).single('file'), PostarImoveis);
routes.get('/search', Search);
routes.get('/', houtesGet);

module.exports = routes;
const ImovelPost = require('../database/models/UploadImage.model');

const Search = async (req, res) =>{
    const searchImovel = await ImovelPost.find({})
        res.json(searchImovel);
    }

module.exports = Search;
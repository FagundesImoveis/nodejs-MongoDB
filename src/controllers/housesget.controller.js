const imoveis = require('../database/models/UploadImage.model');

const houtesGet = async (req, res)=>{
    const all_imoveis = await imoveis.find({});
    if(all_imoveis){
        res.json(all_imoveis);
    }
}

module.exports = houtesGet;

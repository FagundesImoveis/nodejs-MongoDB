const ImovelPost = require('../database/models/UploadImage.model');

const PostarImoveis = async(req, res)=>{
    const { location: url } = req.file;
    const { titulo, cidade, descricao, tipo, preco, qntdAluguel, qntdQuartos } = req.body;
    const New_Imovel = await ImovelPost.create({
        titulo,
        descricao,
        cidade,
        tipo,
        preco,
        qntdAluguel,
        qntdQuartos,
        url
    });
    res.json({New_Imovel});
    console.log(req.file);
}
module.exports = PostarImoveis;
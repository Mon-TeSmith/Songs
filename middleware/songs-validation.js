const { type } = require("os");

exports.validateSong = (req, res, next) => {
    const data = req.body;
    if(
        (data.hasOwnPorperty('name') && typeof(data.name) === 'string') &&
        (data.hasOwnPorperty('description') && typeof(data.description) === 'string') &&
        (data.hasOwnPorperty('category') && typeof(data.category) === 'string') &&
        (data.hasOwnPorperty('price') && typeof(data.price) === 'number')
    ){
        return next();
    }else{
        return res.status(400).send({error: 'Missing required songs.'});
    }
}
const jwt = require('jsonwebtoken');
require('dotenv').config();

const validaAcesso = (req, res, next) => {
    const token = req.headers.authorization
    jwt.verify(token.split(' ')[1], process.env.KEY, (err, data) => {
        if(err != null) res.status(400).json(err).end(); 
        else {
            if(data[0].role === "Gerenciador") {
                next();
            }else {
                res.status(401).end();
            }
        }
    })
}

module.exports = {
    validaAcesso
}
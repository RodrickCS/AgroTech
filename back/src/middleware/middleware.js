const jwt = require('jsonwebtoken');
require('dotenv').config();

const validaAcesso = (req, res, next) => {
    const token = req.body.token;

    jwt.verify(token, process.env.KEY, (err, data) => {
        console.log(data);
        if(err != null) res.status(404).json(err).end(); 
        else {
            if(data.role === "Gerenciador") {
                next();
            }else {
                res.status(401).end();
            }
        }
    })

    res.status(200).end();
}

module.exports = {
    validaAcesso
}
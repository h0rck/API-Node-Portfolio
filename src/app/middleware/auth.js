/*

Essa função valida o token passado e retorna o id do usuario que o utiliza.

*/


const jwt = require('jsonwebtoken');
require('dotenv').config()


module.exports = (req,res,next) => {
    const auth = req.headers.authorization; // Bearer + token
    const parts = auth.split(' ');
    const [schema, token] = parts; // Bearer, token

    // Valida antes para poupar processamento  
    if(!auth || parts === 2 || !/^Bearer$/i.test(schema)) 
        return res.status(401).send({erro: 'Token invalido'});


    // valida o token usando o TOKEN do .env
    jwt.verify(token, process.env.TOKEN,(err, decoded) => {
        if(err) return res.status(401).send({erro: 'Token invalido'});

        // retono o Id do usuairo que e passado no token para ser usado posteriormente como userId
        req.userId = decoded.params.id;
        return next();

    });

}
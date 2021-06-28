require('dotenv').config()
const bcrypt    = require('bcryptjs');
const jwt       = require('jsonwebtoken');
const User      = require('../models/user.js');

const generateToken = params => jwt.sign({params}, process.env.TOKEN,{expiresIn: 86480,});


exports.user = async (req, res) => {
    
    const user = await User.findAll();

    return res.send({user});
}
exports.register = async (req, res) => {

    const query = await User.findOne({where: {email: req.body.email}});

    if(await query) return res.status(400).send({error:'Email já existe'});
    
    const user = await User.create(req.body);

    user.senha = undefined;

    return res.send({user, token: generateToken({id: user.Id})});
}
exports.authenticate = async (req, res) => {
    const {email, senha} = req.body;
    let data = false;

    const user = await User.findOne({where: {email}});

    if(!user) return res.status(404).send({error:'Usuario não encontrado'})

    if(!bcrypt.compareSync(senha, user.senha)) return res.status(404).send({error:'Senha invalida'})

    user.senha = undefined;

    return res.send({user, token: generateToken({id:user.Id})});
   

}
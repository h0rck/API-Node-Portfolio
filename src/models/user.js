const Sequelize = require('sequelize');
const database  = require('../db.js');
const bcrypt    = require('bcryptjs');
 
const User = database.define('user', 
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nome: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email:{
            type :  Sequelize.STRING,
            allowNull: false,
        },
        senha:{
            type :  Sequelize.STRING,
            allowNull: false,
        },
    });


User.prototype.validPassword = senha =>  bcrypt.compareSync(senha, this.senha);
    

User.beforeCreate(async user =>  user.senha = await bcrypt.hash(user.senha, 2));
 
module.exports = User;
  
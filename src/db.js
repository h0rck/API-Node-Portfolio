const Sequelize = require('sequelize');
const sequelize = new Sequelize('AMET', 'root', '', {dialect: 'mysql', host: 'localhost',define: {
  freezeTableName: true,
  timestamps: false,
}});

// try {
//     sequelize.authenticate();
//     console.log('conexão feita na database.');
//   } catch (error) {
//     console.error('erro na conexao com a database:', error);
//   }
 
module.exports = sequelize;


  // não adicione os atributos de carimbo de data / hora (updatedAt, createdAt)
  // timestamps: false,

  // não exclua entradas do banco de dados, mas defina o atributo recém-adicionado deletedAt
  // para a data atual (quando a exclusão foi feita). paranóico só funcionará se
  // carimbos de data / hora estão habilitados
  // paranoid: true,

  // não use camelcase para atributos adicionados automaticamente, mas estilo de sublinhado
  // so updatedAt será updated_at
  // underscored: true,

  // desativa a modificação de tablenames; Por padrão, o sequelize irá automaticamente
  // transforma todos os nomes de modelo passados (primeiro parâmetro de define) em plural.
  // se você não quiser isso, defina o seguinte
  // freezeTableName: true,

  // define o nome da mesa
  // tableName: 'my_very_custom_table_name'



 
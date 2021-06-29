# API para criação e login de usuário

Essa api foi desenvolvida em node usando express e outras ferramentas. Ela tem autenticação JWT e criptografia para senhas. Existem vários ganchos nela para projetos maiores pois é um pequeno pedaço do meu tcc.


# Essa é a query 

Os dados do banco esta no arquivo `/src/database/db.js`

CREATE TABLE `user` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `nome` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `senha` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`id`)
)

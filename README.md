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

# As rotas são :

**Aqui voce faz  o registor

curl --request POST \
  --url http://127.0.0.1:8000/register \
  --header 'Content-Type: application/json' \
  --data '{
	"nome": "nome",
	"email": "email@gmail.com",
	"senha": "senha"
}'

**Aqui voce valida o login 

curl --request POST \
  --url http://127.0.0.1:8000/authenticate \
  --header 'Content-Type: application/json' \
  --data '{
	"email":"hash23@2outlook.com",
	"senha":"senha"
}'


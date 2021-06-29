# API para criação e login de usuário

Essa api foi desenvolvida em node usando express e outras ferramentas. Ela tem autenticação JWT e criptografia para senhas. Existem vários ganchos nela para projetos maiores pois é um pequeno pedaço do meu tcc.


# Essa é a query 

Os dados do banco esta no arquivo `/src/database/db.js`

CREATE TABLE 'user' (
  'id' int(4) NOT NULL AUTO_INCREMENT,
  'nome' varchar(30) NOT NULL,
  'email' varchar(50) NOT NULL,
  'senha' varchar(60) DEFAULT NULL,
  PRIMARY KEY ('id')
)

# As APIs são :

**Registra um usuario**

Retorna um token jwt

curl --request POST \
  --url http://127.0.0.1:8000/register \
  --header 'Content-Type: application/json' \
  --data '{
	"nome": "nome",
	"email": "email@gmail.com",
	"senha": "senha"
}'

**Valida o login**

Retorna um token jwt

curl --request POST \
  --url http://127.0.0.1:8000/authenticate \
  --header 'Content-Type: application/json' \
  --data '{
	"email":"email@gmail.com",
	"senha":"senha"
}'

**Traz os usuarios do banco**

Para trazer precisa validar via toke jwt criado nas apis de login e de register

curl --request GET \
  --url http://127.0.0.1:8000/user \
  --header 'authorization: Bearer `token jwt`'

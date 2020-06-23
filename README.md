# node-api

Este repositório foi baseado na API Rest do curso NodeJS da Rocketseat.

## Breve descrição

Uma API simples que pode ser utilizada para criar/ler/atualizar/deletar produtos do Banco de Dados (CRUD = Create, Read, Update e Delete).

## Tecnologias utilizadas

As principais tecnologias utilizadas neste projeto foram:

* JavaScript
* Node.js
* Express
* Celebrate
* Cors
* MySQL

## Como utilizar?

A partir da rota principal http://localhost:3001/api, você pode:

* **GET** - Listar todos os produtos cadastrados: http://localhost:3001/api/products (Não é necessário, porém se quiser filtrar por página, basta acrescentar `?page=NumeroDaPagina`)
* **GET** - Listar apenas um produto por Id: http://localhost:3001/api/products/IdProduto
* **POST** - Criar um produto: http://localhost:3001/api/products com um corpo de requisição do tipo JSON
* **PUT** - Atualizar dados de um produto: http://localhost:3001/api/products/IdProduto com um corpo de requisição do tipo JSON
* **DELETE** - Deletar um produto: http://localhost:3001/api/products/IdProduto

Para visualizar a tabela do banco de dados, recomendo utilizar o programa MySQL Server (visualização via CLI) ou o MySQL Workbench (visualização via GUI).

A maioria dos navegadores só consegue nos retornar dados vindos de requisição GET. Então, para  visualizar os resultados de outros métodos HTTP, recomendo utilizar um programa chamado [Insomnia](https://insomnia.rest/).

### Observações

No arquivo de conexão com a base de dados `conn.js`, é importante colocar o usuário (já existente nas configurações do banco) que irá acessar a database e a senha (caso tenha).

```javascript
const database = mysql.createConnection({
  host: 'localhost',
  user: 'foo', // Nome do usuário, exemplo: foo
  password: 'bar', // Senha desse usuário, exemplo: bar
  multipleStatements: true
});
```

### Licença

MIT License

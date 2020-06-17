# node-api

Este repositório foi baseado na API Rest do curso NodeJS da Rocketseat.

## Breve descrição

Uma API simples que pode ser utilizada para criar/ler/atualizar/deletar um produto do Banco de dados (CRUD = Create, Read, Update e Delete).

## Tecnologias utilizadas

As principais tecnologias utilizadas neste projeto foram:

* Javascript
* Node.js
* Express
* Celebrate
* Cors
* MySQL

## Como utilizar?

A partir da rota principal http://localhost:3001/api, você pode:

* Listar todos os produtos cadastrados: http://localhost:3001/api/products (Não é necessário, porém se quiser filtrar por página, basta acrescentar ?page=NumeroDaPagina)
* Listar apenas um produto por Id: http://localhost:3001/api/products/IdProduto
* Criar um produto: http://localhost:3001/api/products com um corpo de requisição do tipo JSON
* Atualizar dados de um produto: http://localhost:3001/api/products/IdProduto com um corpo de requisição do tipo JSON
* Deletar um produto: http://localhost:3001/api/products/IdProduto

Para visualizar as tabelas do banco de dados, você pode ver pelo console no terminal, usando o programa MySQL Server, ou pela interface gráfica do programa MySQL Workbench.

### Observações

No arquivo de conexão com a base de dados `conn.js`, é importante colocar o usuário (já existente nas configurações do banco) irá acessar a database e a senha (caso tenha).

```javascript
const database = mysql.createConnection({
  host: 'localhost',
  user: 'foo', // Nome do usuário, exemplo: foo
  password: 'bar', // Senha desse usuário, exemplo: bar
});
```

### Licença

MIT
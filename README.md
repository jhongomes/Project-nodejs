# 📜 Sobre
  
  O Projeto é um crud de cadastro com um relacionamento `1-1` bidirecional para registrar dados de clientes e usuários em um banco de dados SQLITE.

## Cadastro de Cliente

**RF**

- Deve ser possível cadastrar um cliente.
- Deve ser possível listar todos os clientes.
- Deve ser possível buscar um único cliente por `CPF`.
- Deve ser possível alterar as informações de um cliente.
- Deve ser possível excluir um cliente.

**RN**

- Não deve ser possível cadastrar um cliente com `e-mail` existente.
- Não deve ser possível cadastrar um cliente com `CPF` existente.
- Não deve ser possível listar clientes se não estiver `autenticado` no sistema com o refresh_token.
- Não deve ser possível buscar um único cliente se não estiver `autenticado` no sistema com o refresh_token.
- Não deve ser possível alterar um cliente se não estiver `autenticado` no sistema com o refresh_token.
- Não deve ser possível alterar o `e-mail` já cadastrado no sistema.
- Não deve ser possível excluir cliente que não exista no sistema.
- Ao excluir um cliente, todos os dados de acesso de `usuário` também serão removidos do sistema.

## Cadastro de Usuário

**RF**

- Deve ser possível cadastrar um usuário.
- Deve ser possível autenticar um usuário.
- Deve ser possível listar usuário.

**RN**

- Não deve ser possível cadastrar usuário com `e-mail` existente.
- Não deve ser possível autenticar usuário com `e-mail` incorreto.
- Não deve ser possível autenticar usuário com `password` incorreto.
- Não deve ser possível listar usuário se não estiver `autenticado` no sistema com o refresh_token.

<br>

# 🔧 Tecnologias utilizadas

- [Nodejs](https://nodejs.org/en/)
- [Express](http://expressjs.com/pt-br/)
- [Typescript](https://docs.microsoft.com/pt-br/archive/msdn-magazine/2015/january/typescript-understanding-typescript)
- [TypeORM](https://typeorm.io/#/)
- [Jest](https://jestjs.io)
- [VS Code](https://code.visualstudio.com/) com [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) e [ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

# 👷‍♂️ Arquitetura

Clean Architecture

#  Como baixar o projeto

⚠ É necessário possuir as seguintes ferramentas instaladas em seu computador:
- [Node.js](https://nodejs.org/en/). (Preferencialmente a versão 15.4.0)


⚠ Você pode usar tanto o [yarn](https://yarnpkg.com/) quanto o [npm]() para instalar as dependências.


<br />

Clone o projeto para sua maquina local:
```bash
# Clone o projeto para sua maquina local
$ git clone https://github.com/jhongomes/Project-nodejs.git

# Acesse a pasta do projeto
$ cd Project-nodejs

# Instale todas as dependências do projeto
$ yarn 
ou
$ npm i install

# Rode o comando para criar as mirations no SQLITE.
$ yarn typeorm migration:run
ou
$ npm run typeom migration:run

# Rode o projeto
$ yarn dev
ou
$ npm run dev
```
<br />


# Rotas locais

## Cadastrar Cliente
* `POST http://localhost:3000/customers`

Request body example:
 ```json
{
		"type_customer": "juridica",
     "name": "kk",
     "lastname": "Gomes souza",
     "cpf": "3333",
     "email": "jhonata@gmail.com",
     "telephone": "(92) 99118-7618",
     "zip_code": "699086-642",
     "street": "Zumbi",
     "number": "332",
     "city": "Manaus",
     "state": "Amazonas",
     "store_hours_open": "{Timestamp => ISO-8601}",
     "day_of_attendance": "{Timestamp => ISO-8601}",
     "vehicles_used": "HYLLUX" 
}

 ```
## Cadastrar Usuário
* `POST http://localhost:3000/users`

Request body example:

⚠ Você precisa passar o `id` do cliente criado no `customer_id`.

```json
{
	"email": "jhonatan@gmail.com",
	"password": "123456",
	"customer_id": "697703-adc6-4b15-b29b-c1522fd65b91"
}

```
## Autenticação de Usuário

* `POST http://localhost:3000/sessions`

⚠ Você precisa passar `email` e `password` cadastrados. 

```json
{
  "email": "jhonatan@gmail.com",
  "password": "123456"
}

```
⚠  Ao se autenticar, você precisa passar o refresh_token que será gerado nas demais rotas da aplicação, passe o ``refresh_token`` no ``bearer Token`` de todas as demais rotas do insominia ou postman.

## Listar Usuário

⚠ Você deve passar o refresh_token gerado na sessão autenticate no => `berear token`

* `GET http://localhost:3000/users`


## Listar Cliente

⚠ Você deve passar o refresh_token gerado na sessão autenticate no => `berear token`

* `GET http://localhost:3000/customers`


## Listar único Cliente por Cpf

⚠ Você deve passar o refresh_token gerado na sessão autenticate no => `berear token`

Request url parameters example:

* `GET http://localhost:3000/customers/3333`

 ``` cpf: 3333   ```

## Atualizar dados do cliente

* `http://localhost:3000/customers/{id}`

Request url parameters example:
```
    id: "fba1d606-146a-4e35-b474-2d1c2ba3c1e4"
``` 

## Remover Cliente
* `http://localhost:3000/customers/{id}`
  
Request url parameters example:
```
    id: "fba1d606-146a-4e35-b474-2d1c2ba3c1e4"  
```

# Testes
[Jest](https://jestjs.io/) Foi utilizado para os testes, para rodá-los execute:
```
$ yarn
$ yarn test
```
Ou:
```
$ npm install
$ npm run test
```


<p align="center">Feito por <a href="www.linkedin.com/in/jhonatan-gomes-de-souza-513a3a197/" target="_blank">Jhonatan Gomes💜</a></p>
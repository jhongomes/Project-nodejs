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
$ git clone 

# Acesse a pasta do projeto
$ cd 

# Instale todas as dependências do projeto
$ yarn Ou:
$ npm install


# Rode o projeto
$ yarn dev
Ou:
$ npm run dev
```
<br />
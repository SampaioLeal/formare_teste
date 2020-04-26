# Teste para a Formare Tech

![Tela de login][login]
![Tela do chat][chat]

Tecnologias usadas:

- ReactJS + MobX + Socket.IO
- NodeJS + MongoDB + Socket.IO

## Configurando

Para ter uma cópia da aplicação basta clonar o repositório com o comando abaixo:

`git clone https://github.com/SampaioLeal/formare_teste.git`

## Front-end

Para inicializar o front-end basta entrar na pasta `frontend` e executar o comando `yarn install` para instalar as dependências e `yarn start` para iniciar o servidor de desenvolvimento ou `yarn build` para criar uma build para produção.

Obs: para configurar o servidor socket basta editar a URL no arquivo `src/services/store.js`

## Back-end

Para inicializar o back-end basta entrar na pasta `backend` e executar o comando `yarn install` para instalar as dependências e `yarn dev` para iniciar o servidor de desenvolvimento ou `yarn start` para rodar a aplicação.

Obs: para configurar a porta do servidor ou o banco de dados basta editar o arquivo `src/server.js`


[login]: https://github.com/SampaioLeal/formare_teste/blob/master/imagens/login.png "Tela de Login"
[chat]: https://github.com/SampaioLeal/formare_teste/blob/master/imagens/chat.png "Tela de Chat"

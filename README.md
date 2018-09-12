Front-end de um chat em tempo real para múltiplos usuários utilizando React e Socket.IO.

O back-end pode ser encontrado [aqui](https://github.com/lucasveigaf/chatserver).

## Inicialização:

```
git clone https://github.com/lucasveigaf/chatserver.git
cd chatserver
npm install
node index.js

git clone https://github.com/lucasveigaf/chatclient.git
cd chatclient
npm install
npm start
```

## To do:

- Melhorar a organização dos componentes estilizados com o styled-components (atualmente há duplicações).
- Routerizar as telas (ao invés de uma condicional entre o componente JoinChat e a tela de chat, por exemplo).
- Testes.
- Separar dos componentes a lógica de comunicação com o servidor.
- Internacionalização.
- Aplicar um design decente.
- ...

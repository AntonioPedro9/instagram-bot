# Instagram Bot

Aplicação desenvolvida usando [Node](https://nodejs.org/) e [Puppeteer](https://pptr.dev/) para fazer marcações automáticas em sorteios do Instagram.
<br>
O Bot faz aproximadamente 1400 marcações em 24 horas.

## Como usar

No o arquivo `bot.js` insira as seguintes informações:

```
const USERNAME = ""; // nome de usuário
const PASSWORD = ""; // senha do instagram
const POST_URL = ""; // link da publicação do sorteio
const MENTIONS = 2;  // número de pessoas que deseja marcar
```

Em seguida adicione o nome de usuário das pessoas que você deseja marcar na publicação, exemplo:

```
let profilesToMention = ["@usuario1", "@usuario2", "@usuario3", "@usuario4"];
```

## Executando a aplicação

Dentro da pasta do repositório rode os seguintes comandos:

```
> npm install
> npm start
```

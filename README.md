# Instagram Bot

Aplicação desenvolvida usando [Node](https://nodejs.org/) e [Puppeteer](https://pptr.dev/) para fazer marcações automáticas em sorteios do Instagram.
<br>
O Bot faz aproximadamente 1400 marcações em 24 horas.

## Como usar

No o arquivo ```bot.js``` preencha o seguinte trecho de código com suas informações do Instagram e o link da publicação que está acontecendo o sorteio.

```
const USERNAME = "seu_nome_de_usuario";
const PASSWORD = "sua_senha";
const POST_URL = "link_da_publicacao";
```

Em seguida adicione o nome de usuário das pessoas que você deseja marcar na publicação, exemplo:

```
let profilesToMention = ["usuario1", "usuario2", "usuario3", "usuario4"];
```

## Executando a aplicação

Dentro da pasta do repositório rode os seguintes comandos:

```
> npm install
> npm start
```


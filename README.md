# Teste Tecnico - Fullstack

> ilumeo data science

## Instruções
Antes de mais nada configuremos a ambiente para execução do projeto, é necessário realizar o comando ```npm rum docker:start``` para adicionar o conteiner docker com banco postgresql. 

(obs: caso retorne erro, verifique se o serviço docker está ativo, para ativar basta usar o comando ```npm rum docker:service```) para subir os conteiners basta usar o comando ```npm rum docker:up```.

Para executar a aplicação basta usar o comando ```bash  npm rum dev``` e o serviço de API ocupara a porta `localhost:3333` e o Web no dominio `http://127.0.0.1:5173/time/users`

## API's
- GET http://localhost:3333/time/users/:id 
- GET http://localhost:3333/time/:id
- POST http://localhost:3333/time
- POST http://localhost:3333/time/users
  `Variables exemple (JSON):
  {
	"name": "Empregado03",
	"email": "exemple03@email.com"
  }`

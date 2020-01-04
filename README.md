# Desafio final Bootcamp GoStack10

Código referente à entrega do desafio final do Bootcamp GoStack 10.

## Instruções de inicialização

### BACKEND

A aplicação GymPoint utiliza o sistema de "Containers" através do <a href="https://www.docker.com/" target="_blank">Docker</a>, portanto primeiro é necessário que você tenha o Docker instalado em sua máquina e configure os banco de dados:
- Postgress
- Redis

Após configurar o Docker, acesse a pasta "backend" e instale as dependências com o comando: 
<code>$ yarn</code>

Inicie o docker:
<code>$ docker start 'nome do database'</code>

Instale as tabelas do banco de dados e o conteúdo inicial:
<pre>
 <code>
  $ yarn sequelize db:migrate <br>
  $ yarn sequelize db:seed:all
 </code>
</pre>

Inicie a aplicação backend com:
<code>$ yarn dev</code>

### FRONTEND

Acesse a pasta "frontend" e instale as dependências:
<code>$ yarn</code>

Inicie o frontend:
<code>$ yarn start</code>

### MOBILE

Para desenvolvimento da versão mobile, utilizei o sistema ANDROID como base, portanto a versão está adaptada ao ANDROID e pode sofrer algumas mudanças de layout ou erros caso seja inicializado em um sistema IOS.

Acesse a pasta "mobile" e instale as dependências:
<code>$ yarn</code>

Inicie o mobile:
<code>$ react-native run-android</code>

## Especificações do ambiente de desenvolvimento

- node: 10.16.3
- npm: 6.9.0
- java: 1.8.0_222
- yarn: 1.19.1rea
- react-native-cli: 2.0.1
- docker: 19.03.5
- SO: Windows 10 Pro

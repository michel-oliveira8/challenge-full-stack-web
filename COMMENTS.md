1. Decisão da arquitetura utilizada

- O motivo da arquitetura ser utilizada dessa forma foi devido a formação que tive, então ao meu ver seria o modo que eu entenderia e poderia repassar a explicação para outras pessoas sem problema. Mas ressaltando que sou aberto em aprender outros tipos de arquitetura. 

2. Lista de bibliotecas de terceiros utilizadas

- Bibliotecas utilizadas no Front-end:
- Vuetify
- Axios
- Eslint vue/airbnb

- Bibliotecas utilizadas no Back-end:
- Express
- Sequelize
- Nodemon
- Cors
- Mysql2
- Mocha, Chai, Sinon
- Eslint Airbnb
- Dotenv

- Ferramentas:

- VsCode
- Database(extensão)
- Thunder Client(extensão)
- Vuetur

3. O que você melhoraria se tivesse mais tempo
- No Front-end, acredito que eu poderia ter separado melhor os componentes, pois a maioria das funcionalidades da aplicação está concentrada no componente Students.vue, mas como não tinha familiaridade com a biblioteca Vuetify, fiquei receoso em fazer a separação desse componente e a aplicação quebrar. Mas graças a Deus a aplicação está funcional dessa forma. Acho que seria esse ponto a melhorar.

4. Quais requisitos obrigatórios que não foram entregues

- Todos os requisitos obrigatórios foram entregues! E gostaria de agradecer a +A Educação pela oportunidade de realizar esse desafio. Achei bastante desafiador e ao mesmo tempo divertido, além de ter aprendido um novo framework(Vue)

**Obs**:

- Rodar a aplicação no front-end:

- `npm run serve`

- Rodar a aplicação no back-end:

- Favor alterar o nome do arquivo .env_example para .env e inserir os seus dados para comunicação com o BD.

- Para instalar o serviço MySQL na maquina:
- `Linux: sudo apt install mysql-server`
`macOS: brew install mysql`

- Para verificar status do serviço MySQL na máquina:
- `Linux: sudo systemctl status mysql`
`macOS: brew services list`

 - Para ativar o serviço MySQL:
- `Linux: systemctl start mysql`
`macOS: brew services run mysql`

- Scripts para fazer na pasta backend:

  - `npm run db:reset`(cria o banco, as colunas e popula o mesmo)
  - `npm run dev` rodar servidor ma porta 3001 para realizar endpoits

- Para rodar os testes:

  - `npm test`

- API Endopoints

- POST /student
Adiciona um novo estudante

- GET /students
Retorna todos os estudantes

- PATCH /student/:id
Atualiza somente os campos 'Name' e 'Email'

- DELETE /student/:id
Deleta um estudante do banco de dados
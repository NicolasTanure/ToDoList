# Descrição

Descrição do Projeto:

Backend (Spring Boot):
Uma API RESTful para gerenciar tarefas (CRUD: Criar, Ler, Atualizar e Deletar).
Cada tarefa terá um ID, título, descrição e status (concluída ou não).
Frontend (React):
Uma interface simples para listar as tarefas, adicionar novas tarefas, marcar tarefas como concluídas e excluir tarefas.
O frontend consumirá a API do backend para buscar e manipular os dados.
Tecnologias que você vai usar:

Backend (Spring Boot):

Spring Boot: Framework para criar aplicações Java backend.
Spring Web: Para criar endpoints RESTful.
Spring Data JPA: Para persistência de dados (usando um banco de dados em memória).
H2 Database: Banco de dados em memória (não precisa de configuração externa).
Lombok: Para reduzir boilerplate code (getters, setters, construtores, etc.).
Spring Boot DevTools: Para reinicialização automática durante o desenvolvimento.
Maven ou Gradle: Gerenciador de dependências (escolha um).
Frontend (React):

React: Biblioteca para construir a interface do usuário.
Axios: Para fazer chamadas HTTP à API do backend.
React Router: Para gerenciar rotas no frontend (opcional, se quiser adicionar páginas).
Bootstrap ou Material-UI: Para estilização rápida e responsiva.
Node.js e npm: Para gerenciar dependências e executar o projeto React.
Comunicação entre Backend e Frontend:

JSON: Formato de dados para comunicação entre frontend e backend.
CORS (Cross-Origin Resource Sharing): Configuração no backend para permitir requisições do frontend.
Estrutura do Projeto:

Backend (Spring Boot):

Model:
Classe Tarefa com os atributos: id, titulo, descricao, concluida.
Repository:
Interface TarefaRepository que estende JpaRepository para operações de banco de dados.
Service:
Classe TarefaService para implementar a lógica de negócio (criar, ler, atualizar, deletar tarefas).
Controller:
Classe TarefaController com endpoints REST:
GET /tarefas: Listar todas as tarefas.
POST /tarefas: Criar uma nova tarefa.
PUT /tarefas/{id}: Atualizar uma tarefa existente.
DELETE /tarefas/{id}: Deletar uma tarefa.
Configuração do CORS:
Permitir requisições do frontend (React) no backend.
Frontend (React):

Componentes:
TarefaLista: Para exibir a lista de tarefas.
TarefaFormulario: Para adicionar ou editar uma tarefa.
TarefaItem: Para exibir os detalhes de uma tarefa individual.
Chamadas à API:
Usar Axios para:
Buscar todas as tarefas (GET /tarefas).
Criar uma nova tarefa (POST /tarefas).
Atualizar uma tarefa (PUT /tarefas/{id}).
Deletar uma tarefa (DELETE /tarefas/{id}).
Estilização:
Usar Bootstrap ou Material-UI para estilizar os componentes.
Passo a Passo para Implementar:

Backend (Spring Boot):

Crie um projeto Spring Boot usando o Spring Initializr.
Dependências: Spring Web, Spring Data JPA, H2 Database, Lombok.
Defina a classe Tarefa como uma entidade JPA.
Crie o TarefaRepository para operações de banco de dados.
Implemente o TarefaService com a lógica de negócio.
Crie o TarefaController com os endpoints REST.
Configure o CORS para permitir requisições do frontend.
Frontend (React):

Crie um projeto React usando npx create-react-app todo-list-frontend.
Instale as dependências:
npm install axios bootstrap react-router-dom (ou @mui/material se usar Material-UI).
Crie os componentes (TarefaLista, TarefaFormulario, TarefaItem).
Use Axios para consumir a API do backend.
Estilize os componentes com Bootstrap ou Material-UI.
Exemplo de Endpoints (Backend):

GET /tarefas:
json
Copy
[
  {
    "id": 1,
    "titulo": "Estudar Spring Boot",
    "descricao": "Aprender a criar APIs RESTful.",
    "concluida": false
  }
]
POST /tarefas:
json
Copy
{
  "titulo": "Estudar React",
  "descricao": "Aprender a criar interfaces com React.",
  "concluida": false
}
PUT /tarefas/{id}:
json
Copy
{
  "titulo": "Estudar React (atualizado)",
  "descricao": "Aprender a criar interfaces com React e consumir APIs.",
  "concluida": true
}
DELETE /tarefas/{id}: Remove a tarefa com o ID especificado.
Como Frontend e Backend se Comunicam:

O frontend faz uma requisição GET /tarefas para buscar a lista de tarefas.
O frontend faz uma requisição POST /tarefas para adicionar uma nova tarefa.
O frontend faz uma requisição PUT /tarefas/{id} para atualizar uma tarefa.
O frontend faz uma requisição DELETE /tarefas/{id} para remover uma tarefa.

Extras:

Adicionar autenticação (JWT, OAuth2).
Adicionar testes unitários e de integração.
Deploy do backend no Heroku e do frontend no Netlify/Vercel.
Esse projeto é simples, mas cobre todos os conceitos básicos de backend com Spring e frontend com React. Se precisar de ajuda em algum passo específico, é só perguntar! 😊



# Read Me First
The following was discovered as part of building this project:

* The original package name 'com.example.todo-list' is invalid and this project uses 'com.example.todo_list' instead.

# Getting Started

### Reference Documentation
For further reference, please consider the following sections:

* [Official Apache Maven documentation](https://maven.apache.org/guides/index.html)
* [Spring Boot Maven Plugin Reference Guide](https://docs.spring.io/spring-boot/3.4.3/maven-plugin)
* [Create an OCI image](https://docs.spring.io/spring-boot/3.4.3/maven-plugin/build-image.html)
* [Spring Web](https://docs.spring.io/spring-boot/3.4.3/reference/web/servlet.html)
* [Spring Data JPA](https://docs.spring.io/spring-boot/3.4.3/reference/data/sql.html#data.sql.jpa-and-spring-data)
* [Spring Boot DevTools](https://docs.spring.io/spring-boot/3.4.3/reference/using/devtools.html)

### Guides
The following guides illustrate how to use some features concretely:

* [Building a RESTful Web Service](https://spring.io/guides/gs/rest-service/)
* [Serving Web Content with Spring MVC](https://spring.io/guides/gs/serving-web-content/)
* [Building REST services with Spring](https://spring.io/guides/tutorials/rest/)
* [Accessing Data with JPA](https://spring.io/guides/gs/accessing-data-jpa/)

### Maven Parent overrides

Due to Maven's design, elements are inherited from the parent POM to the project POM.
While most of the inheritance is fine, it also inherits unwanted elements like `<license>` and `<developers>` from the parent.
To prevent this, the project POM contains empty overrides for these elements.
If you manually switch to a different parent and actually want the inheritance, you need to remove those overrides.


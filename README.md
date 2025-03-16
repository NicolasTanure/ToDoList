Description Project Description:

ToDoList an simple project to review and practice again my skills with Spring, React, JWT, OAuth2, and Integration!

Backend (Spring Boot):

A RESTful API to manage tasks (CRUD: Create, Read, Update, and Delete). Each task will have an ID, title, description, and status (completed or not). Frontend (React):

A simple interface to list tasks, add new tasks, mark tasks as completed, and delete tasks. The frontend will consume the backend API to fetch and manipulate data. Technologies You Will Use:

Backend (Spring Boot):

Spring Boot: Framework for creating Java backend applications. Spring Web: For creating RESTful endpoints. Spring Data JPA: For data persistence (using an in-memory database). H2 Database: In-memory database (no external configuration required). Lombok: To reduce boilerplate code (getters, setters, constructors, etc.). Spring Boot DevTools: For automatic restart during development. Maven or Gradle: Dependency manager (choose one). Frontend (React):

React: Library for building the user interface. Axios: For making HTTP calls to the backend API. React Router: For managing routes in the frontend (optional, if you want to add pages). Bootstrap or Material-UI: For quick and responsive styling. Node.js and npm: To manage dependencies and run the React project. Communication Between Backend and Frontend:

JSON: Data format for communication between frontend and backend. CORS (Cross-Origin Resource Sharing): Configuration in the backend to allow frontend requests. Project Structure:

Backend (Spring Boot):

Model: Task class with attributes: id, title, description, completed. Repository: TaskRepository interface extending JpaRepository for database operations. Service: TaskService class to implement business logic (create, read, update, delete tasks). Controller: TaskController class with REST endpoints: GET /tasks: List all tasks. POST /tasks: Create a new task. PUT /tasks/{id}: Update an existing task. DELETE /tasks/{id}: Delete a task. CORS Configuration: Allow requests from the frontend (React). Frontend (React):

Components: TaskList: To display the list of tasks. TaskForm: To add or edit a task. TaskItem: To display the details of an individual task. API Calls: Use Axios to: Fetch all tasks (GET /tasks). Create a new task (POST /tasks). Update a task (PUT /tasks/{id}). Delete a task (DELETE /tasks/{id}). Styling: Use Bootstrap or Material-UI to style the components.

Extras:

Add authentication (JWT, OAuth2). Add unit and integration tests. Deploy the backend on Heroku and the frontend on Netlify/Vercel. 

Backend (Spring Boot)

The backend of this project is built using Spring Boot, a powerful framework for creating Java-based web applications. It provides a RESTful API to manage tasks, supporting basic CRUD operations (Create, Read, Update, Delete). Each task has the following attributes:

ID: Unique identifier for the task.
Title: Short description of the task.
Description: Detailed information about the task.
Status: Indicates whether the task is completed or not.
Features

Spring Data JPA: Used for database operations, with an in-memory H2 database for development.
Lombok: Reduces boilerplate code by automatically generating getters, setters, and constructors.
CORS Configuration: Allows the frontend to communicate with the backend seamlessly.
Endpoints

GET /tasks: Retrieve all tasks.
POST /tasks: Create a new task.
PUT /tasks/{id}: Update an existing task.
DELETE /tasks/{id}: Delete a task.

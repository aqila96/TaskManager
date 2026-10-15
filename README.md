# TaskManager
Task Manager application built with:

ASP.NET Core Web API
Angular
SQL Server
JWT Authentication
Docker
Features
Login Authentication
JWT Token Authorization
Create Task
Edit Task
Delete Task
Toggle Task Status
Docker
API
docker build -t taskmanager-api .

docker run -d -p 8080:8080 taskmanager-api

Swagger: http://localhost:8080/swagger

Angular
docker build -t taskmanager-ui .

docker run -d -p 4200:80 taskmanager-ui


Task Manager - Setup & Run Guide
Prerequisites

Install the following:
.NET 8 SDK
Visual Studio 2022
SQL Server
Node.js
Angular CLI
Docker Desktop (optional)

1. Clone the Repository
2. Database setup
3. Run backend API
4. Login credentials
5. Run Angular Frontend
6. Run using Docker

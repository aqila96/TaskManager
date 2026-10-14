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

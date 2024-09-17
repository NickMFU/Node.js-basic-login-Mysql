# Full-Stack User Authentication with Node.js and MySQL

This project implements a simple user authentication system using Node.js, Express, and MySQL (XAMPP). Users can register, log in, and access a personalized dashboard displaying their name after login.

## Features

- User Registration (with Name, Email, Password, Phone)
- User Login with JWT Authentication
- Personalized Dashboard displaying the user's name
- Password hashing for security (using bcrypt)
- MySQL database integration with XAMPP

## Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** (v12 or later) - [Download here](https://nodejs.org/)
- **XAMPP** (MySQL and Apache) - [Download here](https://www.apachefriends.org/index.html)
- **Postman** (optional) for API testing - [Download here](https://www.postman.com/)

## Project Setup

### 1. Clone the Repository

```bash
git clone https://github.com/NickMFU/Node.js-basic-login-Mysql.git
cd Node.js-basic-login-Mysql
```

### 2. Install Dependencies

Install the necessary Node.js packages using npm:
```bash
npm install
```
This will install the following main dependencies:

- express: Web framework for Node.js
- mysql2: MySQL driver for Node.js
- bcryptjs: For password hashing
- jsonwebtoken: To generate and verify JWT tokens
- body-parser: To parse incoming request bodies
- nodemon : Run project

### 3. Configure MySQL Database
Start XAMPP and make sure MySQL is running.

Open phpMyAdmin by clicking on it in the XAMPP Control Panel.

Create a new database named users_db.

In the users_db database, create a table called users with the following structure:

sql
Copy code
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255),
    phone VARCHAR(15)
);
### 4. Set Up Environment Variables (Optional)
If you need to use custom database credentials (such as a password for the MySQL root user), create a .env file in the project root and define the following variables:

```bash
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=users_db
JWT_SECRET=your_jwt_secret

```

### 5. Start the Node.js Server
After setting up the database, run the server:

```bash
node index.js
```

The server will be running on http://localhost:5000.

### 6. Serve the HTML Pages
You can access the HTML pages for user registration and login via the following URLs:

Register: http://localhost:5000/register.html
Login: http://localhost:5000/login.html
Once logged in, users will be redirected to the personalized Dashboard.

### API Endpoints
This project exposes the following API endpoints:

### 1. Register User
Endpoint: POST  http://localhost:5000/register

Description: Registers a new user and stores their details in the MySQL database.

Body Parameters:

name: User's full name
email: User's email address
password: User's password (stored as a hash)
phone: User's phone number
Example Request:

json
Copy code
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "phone": "1234567890"
}
###  2. Login User
Endpoint: POST http://localhost:5000/login

Description: Authenticates a user with email and password, returning a JWT token if successful.

Body Parameters:

email: User's email address
password: User's password
Example Request:

json
Copy code
{
  "email": "john@example.com",
  "password": "password123"
}
Response:

On success: { "token": "your_jwt_token" }
On failure: { "message": "Invalid credentials" }
###  3. Dashboard
Endpoint: GET [/dashboard](http://localhost:5000/dashboard)
Description: Returns a personalized message with the user's name. Requires JWT authentication.
Headers: Authorization: Bearer <JWT token>


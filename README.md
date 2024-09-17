Full-Stack User Authentication with Node.js and MySQL
This project implements a simple user authentication system using Node.js, Express, and MySQL (XAMPP). Users can register, log in, and access a personalized dashboard displaying their name after login.

Features
User Registration (with Name, Email, Password, Phone)
User Login with JWT Authentication
Personalized Dashboard displaying the user's name
Password hashing for security (using bcrypt)
MySQL database integration with XAMPP
Prerequisites
Before running this project, ensure you have the following installed:

Node.js (v12 or later) - Download here
XAMPP (MySQL and Apache) - Download here
Postman (optional) for API testing - Download here
Project Setup
1. Clone the Repository
bash
Copy code
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
2. Install Dependencies
Install the necessary Node.js packages using npm:

bash
Copy code
npm install
This will install the following main dependencies:

express: Web framework for Node.js
mysql2: MySQL driver for Node.js
bcryptjs: For password hashing
jsonwebtoken: To generate and verify JWT tokens
body-parser: To parse incoming request bodies
3. Configure MySQL Database
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
4. Set Up Environment Variables (Optional)
If you need to use custom database credentials (such as a password for the MySQL root user), create a .env file in the project root and define the following variables:

bash
Copy code
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=users_db
JWT_SECRET=your_jwt_secret
5. Start the Node.js Server
After setting up the database, run the server:

bash
Copy code
node index.js
The server will be running on http://localhost:5000.

6. Serve the HTML Pages
You can access the HTML pages for user registration and login via the following URLs:

Register: http://localhost:5000/register.html
Login: http://localhost:5000/login.html
Once logged in, users will be redirected to the personalized Dashboard.

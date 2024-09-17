const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const path = require('path'); // Add this line to handle static files

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from "public" folder

// Setup MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'users_db'
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL Connected...');
});

// Register a new user
app.post('/register', (req, res) => {
    const { name, email, password, phone } = req.body;

    bcrypt.hash(password, 10, (err, hash) => {
        if (err) throw err;

        const query = 'INSERT INTO users (name, email, password, phone) VALUES (?, ?, ?, ?)';
        db.query(query, [name, email, hash, phone], (err, result) => {
            if (err) {
                return res.status(400).json({ message: 'Email already exists!' });
            }
            res.status(201).json({ message: 'User registered successfully!' });
        });
    });
});

// Login a user
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const query = 'SELECT * FROM users WHERE email = ?';
    db.query(query, [email], (err, results) => {
        if (err) throw err;

        if (results.length === 0) {
            return res.status(404).json({ message: 'User not found!' });
        }

        const user = results[0];

        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) throw err;

            if (isMatch) {
                const token = jwt.sign({ id: user.id, email: user.email }, 'secretkey', {
                    expiresIn: '1h'
                });

                return res.status(200).json({ token, name: user.name, message: 'Login successful!' });
            } else {
                return res.status(400).json({ message: 'Invalid password!' });
            }
        });
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

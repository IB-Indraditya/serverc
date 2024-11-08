const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Dummy user data for validation
const USER_DATA = {
    user1: 'password123',
    admin: 'admin123',
};

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the login page
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Login Page</title>
        </head>
        <body>
            <h1>Login</h1>
            <form action="/login" method="POST">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required><br><br>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required><br><br>
                <button type="submit">Login</button>
            </form>
        </body>
        </html>
    `);
});

// Handle login requests
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Validate credentials
    if (USER_DATA[username] && USER_DATA[username] === password) {
        res.send(`<h1>Welcome, ${username}!</h1>`);
    } else {
        res.send('<h1>Invalid username or password. Try again!</h1>');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

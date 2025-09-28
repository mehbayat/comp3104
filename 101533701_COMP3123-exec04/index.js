const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Static middleware to serve files from public folder
app.use(express.static('public'));

// GET /hello - Returns "Hello Express JS"
app.get('/hello', (req, res) => {
    res.send('Hello Express JS');
});

// GET /user - Query parameters for firstname and lastname
app.get('/user', (req, res) => {
    const { firstname = 'Pritesh', lastname = 'Patel' } = req.query;
    res.json({
        firstname: firstname,
        lastname: lastname
    });
});

// POST /user/:firstname/:lastname - Path parameters for firstname and lastname
app.post('/user/:firstname/:lastname', (req, res) => {
    const { firstname, lastname } = req.params;
    res.json({
        firstname: firstname,
        lastname: lastname
    });
});

// POST /users - Body parameters for array of users
app.post('/users', (req, res) => {
    // Default users if no body is provided
    const defaultUsers = [
        { firstname: 'Pritesh', lastname: 'Patel' },
        { firstname: 'John', lastname: 'Doe' },
        { firstname: 'John', lastname: 'Rome' }
    ];

    // Use body data if provided, otherwise use default
    const users = req.body && req.body.length > 0 ? req.body : defaultUsers;
    res.json(users);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
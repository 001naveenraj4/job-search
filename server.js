const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./database.js');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json()); // For parsing application/json

// Serve static files from the root directory so index.html is accessible
app.use(express.static(path.join(__dirname)));

// API Endpoints

// Get all jobs (with optional search query)
app.get('/api/jobs', (req, res) => {
    const { q, loc } = req.query;
    let query = "SELECT * FROM jobs";
    let params = [];
    let conditions = [];

    if (q) {
        conditions.push("(title LIKE ? OR company LIKE ?)");
        params.push(`%${q}%`, `%${q}%`);
    }
    if (loc) {
        conditions.push("location LIKE ?");
        params.push(`%${loc}%`);
    }

    if (conditions.length > 0) {
        query += " WHERE " + conditions.join(" AND ");
    }

    db.all(query, params, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ data: rows });
    });
});

// Post a new job
app.post('/api/jobs', (req, res) => {
    const { title, company, companyLogo, location, salary, type, category } = req.body;
    if (!title || !company || !location) {
        res.status(400).json({ error: "Please provide title, company, and location" });
        return;
    }
    const postedAt = 'Just now';
    const query = `INSERT INTO jobs (title, company, companyLogo, location, salary, type, category, postedAt) VALUES (?,?,?,?,?,?,?,?)`;
    db.run(query, [title, company, companyLogo || '', location, salary || '', type || '', category || '', postedAt], function(err) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: "Job created successfully",
            data: { id: this.lastID }
        });
    });
});

// Get all courses
app.get('/api/courses', (req, res) => {
    db.all("SELECT * FROM courses", [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ data: rows });
    });
});

// Subscribe to newsletter
app.post('/api/newsletter', (req, res) => {
    const { email } = req.body;
    if (!email) {
        res.status(400).json({ error: "Please provide an email" });
        return;
    }
    db.run("INSERT INTO newsletter_subscribers (email) VALUES (?)", [email], function(err) {
        if (err) {
            if (err.message.includes('UNIQUE constraint failed')) {
                res.status(400).json({ error: "Email is already subscribed" });
            } else {
                res.status(500).json({ error: err.message });
            }
            return;
        }
        res.json({ message: "Successfully subscribed to the newsletter!" });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

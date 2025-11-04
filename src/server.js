const express = require("express");
const cors = require("cors");
const { Pool } = require('pg');

require("dotenv").config();

const app = express();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    }
});

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({message: "Server is running"});
});

app.get("/users", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM users;");
        res.json(result.rows);
    } catch (error) {
    console.error("Database query failed:", error);
    res.status(500).json({ error: "Internal server error" });
    }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server is running on port 3005");
});

module.exports = app;
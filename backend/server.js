const express = require("express");
const app = express();

const cors = require('cors');
app.use(cors());

const mysql = require("mysql2");
const fs = require('fs');

// Read the .env file
const envFile = fs.readFileSync('.env', 'utf8');

// Parse the key-value pairs from the .env file
const envVars = envFile.split('\n').reduce((acc, line) => {
  const [key, value] = line.split('=');
  acc[key.trim()] = value.trim();
  return acc;
}, {});

// Use the environment variables
const connection = mysql.createConnection({
  host: envVars.DB_HOST,
  user: envVars.DB_USER,
  password: envVars.DB_PASSWORD,
  database: envVars.DB_DATABASE,
  authPlugins: {
    mysql_clear_password: () => () => Buffer.from(envVars.DB_PASSWORD + "\0"),
  },
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
  } else {
    console.log("Connected to the database");
  }
});

const port = 3000; // Choose a port number for your server

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/api/players", (req, res) => {
    const sql = `SELECT p.player_id, p.first_name, p.last_name, p.shirt_number, GROUP_CONCAT(pos.position_abbreviation) AS positions
                 FROM player p
                 JOIN player_has_position php ON p.player_id = php.player_id
                 JOIN position pos ON php.position_id = pos.position_id
                 GROUP BY p.player_id`;
  
    connection.query(sql, (err, results) => {
      if (err) {
        console.error("Error executing SQL query:", err);
        res.status(500).json({ error: "Failed to fetch player data" });
      } else {
        res.json(results);
      }
    });
  });
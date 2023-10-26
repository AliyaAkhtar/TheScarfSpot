const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '301510mel',
  database: 'thescarfspot',
});

// Connect to the MySQL database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL database');
});

// Handle errors
db.on('error', (err) => {
  console.error('MySQL database error: ' + err);
  // You can choose to handle errors as needed, e.g., reconnect or log them.
});

// Export the database connection
module.exports = db;

const express = require('express');
const mysql = require('mysql2'); 
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3001;

app.use(cors());

// Serve static files (images) from the 'public' directory
app.use('/images', express.static(path.join(__dirname, 'public')));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '301510mel',
  database: 'TheScarfSpot',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

app.get('/products', (req, res) => {
  const query = 'SELECT Image_url, `Product Name`, `Product Price` FROM products';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      res.status(500).send('Error fetching data from the database');
    } else {
      res.json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

app.use(express.json()); // Parse JSON requests
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data

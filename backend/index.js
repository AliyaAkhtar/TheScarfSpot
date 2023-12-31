const express = require('express');
const cors = require('cors');
const db = require('./db'); 

const app = express();
app.use(cors());

// Serve images from the "productImages" folder
app.use('/productImages', express.static('productImages'));

// Define your routes and handle database queries here

// app.get('/products', (req, res) => {
//   // Your route handling logic to fetch product data
//   const sql = 'SELECT `Product Name`, `Product Price`, CONVERT(`ImageFileName` USING utf8) AS `ImageFileName` FROM products';

//   db.query(sql, (err, results) => {
//       if (err) {
//           console.error('Error executing SQL query: ' + err);
//           res.status(500).json({ error: 'Database error' });
//       } else {
//           // Log the response data
//           console.log('Product data response:', results);

//           // Send the retrieved product data as a JSON response
//           res.json(results);
//       }
//   });
// });

app.get('/home-products', (req, res) => {
  const sql = 'SELECT `Product Name`, `Product Price`, CONVERT(`ImageFileName` USING utf8) AS `ImageFileName` FROM products LIMIT 3';

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error executing SQL query: ' + err);
      res.status(500).json({ error: 'Database error' });
    } else {
      console.log('Home page product data:', results);
      res.json(results);
    }
  });
});

app.get('/all-products', (req, res) => {
  const sql = 'SELECT `Product Name`, `Product Price`, CONVERT(`ImageFileName` USING utf8) AS `ImageFileName` FROM products';

  db.query(sql, (err, results) => {
    if (err) {
      console.error( 'Error executing SQL query: ' + err);
      res.status(500).json({ error: 'Database error' });
    } else {
      console.log('All products data:', results);
      res.json(results);
    }
  });
});



app.listen(3001, () => {
  console.log('Server is running on port 3001');
});

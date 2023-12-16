const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql'); // Import the mysql package
const personRoutes = require('./routes/personRoutes');
const orderRoutes = require('./routes/orderRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Database configuration
const dbConfig = {
  host: 'localhost',     
  user: 'root',  
  password: 'root',  
  database: 'db', 
};

// Create a connection to the database
const connection = mysql.createConnection(dbConfig);

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

// Define API routes
app.use('/api/person', personRoutes(connection)); // Pass the connection to routes
app.use('/api/order', orderRoutes(connection));   // Pass the connection to routes
app.use('/api/product', productRoutes(connection)); // Pass the connection to routes

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

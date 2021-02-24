// Import express
const express = require('express');
// Import SQLite
const sqlite3 = require('sqlite3').verbose();

// PORT Designation
const PORT = process.env.PORT || 3001;
// app expression
const app = express();
// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Connect to database
const db = new sqlite3.Database('./db/election.db', err => {
    if (err) {
      return console.error(err.message);
    }
  
    console.log('Connected to the election database.');
});
//test server.js connection
// app.get('/', (req, res) => {
//     res.json({
//       message: 'Hello World'
//     });
//   });

// Default response for any other request(Not Found) Catch all
app.use((req, res) => {
    res.status(404).end();
  });

// Start Express.js server on port 3001
// Start server after DB connection
db.on('open', () => {
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
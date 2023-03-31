require('dotenv').config();

const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DB_URI,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

pool.query('SELECT NOW()').then((result) => {
  console.log('Connected to database:', result.rows[0].now);
}).catch((error) => {
  console.error('Error connecting to database:', error);
});

module.exports =pool;
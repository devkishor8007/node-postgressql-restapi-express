const { Client } = require('pg')
require('dotenv').config();

const client = new Client({
    host: process.env.HOST,
    user: process.env.DATABASE_USER,
    port: process.env.DATABASE_PORT,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
});

module.exports = client;
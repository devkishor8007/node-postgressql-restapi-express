const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const db = require('./db');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// check db is connected or not
db.connect().then(() => {
    console.log("Connected PostgresSQL");
}).catch((e) => {
    console.log("Not Connected PostgresSQL");
});

app.use('/', require('./routes/api_routes'),);

const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server is listen at the port ${port}`);
});
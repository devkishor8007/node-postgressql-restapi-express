const express = require('express');
const router = express.Router();
const db = require('../db');

// get all data
router.route('/data').get((req, res) => {
    db.query(`SELECT * FROM users order by id asc`, (err, result) => {
        if (!err) {
            res.status(200).send(result.rows);
        } else {
            res.status(400).send(err.message);
        }
    });
    db.end;
});

// get one data by id 
router.route('/data/:id').get((req, res) => {
    const id = req.params.id;
    db.query(`SELECT * FROM users where id=${id}`, (err, result) => {
        if (!err) {
            res.status(200).send(result.rows);
        } else {
            res.status(400).send(err.message);
        }
    });
    db.end;
});

// insert data
router.route('/data/').post((req, res) => {
    const user = req.body;
    db.query(`INSERT INTO users(id,fname,lname,age,address) values(${user.id},'${user.fname}','${user.lname}','${user.age}','${user.address}')`, (err, result) => {
        if (!err) {
            res.status(200).send('Insert Data Successfully!');
        } else {
            res.status(400).send(err.message);
        }
    });
    db.end;
});

// update data by id
router.route('/data/:id').put((req, res) => {
    const user = req.body;
    db.query(`UPDATE users set fname= '${user.fname}', lname = '${user.lname}', age = '${user.age}', address = '${user.address}' where id = ${user.id}`, (err, result) => {
        if (!err) {
            res.status(200).send('Update Data Successfully!');
        } else {
            res.status(400).send(err.message);
        }
    });
    db.end;
});

// delete data by id
router.route('/data/:id').delete((req, res) => {
    const id = req.params.id;
    db.query(`DELETE FROM users where id = ${id}`, (err, result) => {
        if (!err) {
            res.status(200).send('Delete Data Successfully!');
        } else {
            res.status(400).send(err.message);
        }
    });
    db.end;
});

module.exports = router;
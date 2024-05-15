//dependencies
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mysql = require('mysql')


//define the express operation
const app = express();
const port = 3110;


//define the cors - cross origin for recieving the data in the json format
app.use(cors());
app.use(bodyParser.json())


//establish the connect with the dB
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',  //db mysql username
    password: 'Password',//db mysql password
    database: 'db'
});


//verify whether the db is connected or not
db.connect(err => {
    if (err) {
        console.error('connect is not established with the db ', err);
    }
    else {
        console.log('connect to db')
    }
});

app.listen(port, () => { console.log('server connection established on 3110') })

//to get all the clients
app.get('/getAllClients', (req, res) => {
    const sql = "select * from client";
    db.query(sql, (err, result) => {
        if (err) {
            console.error('Error in fetching the clients', err);
            res.status(500).json({ error: 'An error occured ' });
        }
        else {
            res.status(200).json(result);
        }
    });
});


//to get all the Meetings
app.get('/getAllMeetings', (req, res) => {
    const sql = "select * from meet";
    db.query(sql, (err, result) => {
        if (err) {
            console.error('Error in fetching the clients', err);
            res.status(500).json({ error: 'An error occured ' });
        }
        else {
            res.status(200).json(result);
        }
    });
});

//to insert client into the db
app.post('/createClient', (req, res) => {
    const {cname, mail, address, pwd } = req.body;
    const sql = 'insert into client (cname,mail,address,pwd) values(?,?,?,?)';
    db.query(sql, [cname, mail, address, pwd], (err, result) => {
        if (err) {
            console.error('Error in adding the client', err);
            res.status(500).json({ error: 'An error occured ' });
        }
        else {
            res.status(200).json({ message: 'Client added successfully' });
        }
    });
});

//to insert meet into the db
app.post('/scheduleMeet', (req, res) => {
    const { meetTopic, numOfPeople, meetStartTime } = req.body;
    const sql = 'insert into meet (meetTopic, numOfPeople, meetStartTime) values(?,?,?)';
    db.query(sql, [meetTopic, numOfPeople, meetStartTime], (err, result) => {
        if (err) {
            console.error('Error in adding the meet', err);
            res.status(500).json({ error: 'An error occured ' });
        }
        else {
            res.status(200).json({ message: 'Meet added successfully' });
        }
    });
});

//to delete the meeting
app.delete('/deleteMeet/:id', (req, res) => {
    const id = req.params.id;
    const sql = 'delete from meet where id=?'
    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error('Error in deleting the meet', err);
            res.status(500).json({ error: 'An error occured ' });
        }
        else {
            res.status(200).json({ message: 'Meeting deleted successfully' });
        }
    });
});

//to delete the client
app.delete('/deleteClient/:id', (req, res) => {
    const id = req.params.id;
    const sql = 'delete from client where id=?'
    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error('Error in deleting the client', err);
            res.status(500).json({ error: 'An error occured ' });
        }
        else {
            res.status(200).json({ message: 'Client deleted successfully' });
        }
    });
});

//get a product with id
app.get('/getMeetingsForClient/:id', (req, res) => {
    const id = req.params.id;
    const sql = 'select * from product where id=?'
    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error('Error in deleting the product', err);
            res.status(500).json({ error: 'An error occured ' });
        }
        else {
            res.status(200).json(result);
        }
    });
});

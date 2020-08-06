const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const mysql = require('mysql');
 
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

const connection = mysql.createConnection
({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'password',
    database: 'PROJECT'
});

app.get("/", function(req, res)
{
    let q = 'SELECT * FROM CLIENT';
    connection.query(q, function(err, results)
    {
        if(err) throw err;
        res.render("home");
    });
});

app.get("/homespace", function(req, res)
{
    let q = 'SELECT * FROM EVENT';
    connection.query(q, function(err, results)
    {
        if(err) throw err;
        res.render("homespace");
    });
});

app.post("/reservation", function(req, res)
{
    let client = {
        Client_Last_Name: req.body.last,
        Client_First_Name: req.body.first,
        UST_ID_Num: req.body.id,
        College_Department_Office: req.body.choices,
        Organization_Name: req.body.organization,
        Client_Address: req.body.addr,
        Client_Mobile_Number: req.body.mobile,
        Client_Telephone_Fax_Number: req.body.tel
    };

    connection.query('INSERT INTO CLIENT SET ?', client, function(err, result)
    {
        if(err) throw err;
        console.log(result);
    });
    res.render("homespace"); 
    console.log("Reservation form 2 Post request");
});

app.post("/reservation3", function(req, res)
{
    let event = {
        Title_of_Event: req.body.title,
        Kind_of_Event: req.body.activity,
        Date_of_Event: req.body.date,
        Time_of_Event: req.body.time,
        Number_of_Participants: req.body.participants,
        Ingress: req.body.ingress,
        Egress: req.body.egress,
        Objectives: req.body.objectives,
        Equipment: req.body.equipment
    };

    let space = {
        Space_Requested: req.body.spaces
    };

    connection.query('INSERT INTO EVENT SET ?', event, function(err, result)
    {
        if(err) throw err;
        console.log(result);
    });
    connection.query('INSERT INTO UST_SPACE SET ?', space, function(err, result)
    {
        if(err) throw err;
        console.log(result);
    });
    res.render("homefinal"); 
    console.log("Reservation submitted");
});


app.listen(8888, function()
{
    console.log('App listening on port 8888!');
});
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser")
const app = express();
var mysql = require('mysql');

app.use(bodyParser.json())
app.use(cors());

var con = mysql.createConnection({
    host:'localhost',
    user: 'mher',
    password: 'Keziinch1',
    database:'diplomadb'
});

app.get("/forestApi" , (req,res) => {    
        let query = "SELECT * from forest_events";
        con.query(query, (err,result) => {
            res.json(result)
        })
});

app.put("/update", (req,res) => {
    let participants = req.body.participants;
    let id = req.body.id;
    let updatePart = `UPDATE forest_events SET participants  = ? WHERE id = ? `;
    con.query(updatePart,[participants,id],(err,results) => {
        if(err) console.log(err);
        res.send(results);
        console.log(req.body);
    }); 
});

app.listen(5000, () => {
    console.log("okay test");
});
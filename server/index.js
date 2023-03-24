const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser")
const app = express();
app.use(cors());
var mysql = require('mysql') ;

var con = mysql.createConnection({
    host:'localhost',
    user: 'mher',
    password: 'Keziinch1',
    database:'diplomadb'
});

app.use(bodyParser.urlencoded({extended:true}))

app.get("/forestApi" , (req,res) => {    
        let query = "SELECT * from forest_events";
        con.query(query, (err,result) => {
            res.json(result)
        })
})


app.put("/update", (req,res) => {
    let participant = req.body.participants;
    let id = req.body.id
    let updatePart = "UPDATE forest_events SET participants = ? WHERE id = ?";
    con.query(updatePart, [participant,id], (err,result) => {
        if(err) console.log(err);;
        res.send(result);
    })
})

app.listen(5000, () => {
    console.log("okay test");
})
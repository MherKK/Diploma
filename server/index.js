const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
var mysql = require('mysql') ;

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
})

app.listen(5000, () => {
    console.log("okay test");
})
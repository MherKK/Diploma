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

app.get("/riverApi" , (req,res) => {    
    let query = "SELECT * from river_events";
    con.query(query, (err,result) => {
        res.json(result)
    })
});

app.get("/lakeApi" , (req,res) => {    
    let query = "SELECT * from lake_events";
    con.query(query, (err,result) => {
        res.json(result)
    })
});

app.put("/update/forest_events", (req,res) => {
    let participants = req.body.participants;
    let id = req.body.id;
    let updatePart = `UPDATE forest_events SET participants  = ? WHERE id = ? `;
    con.query(updatePart,[participants,id],(err,results) => {
        if(err) console.log(err);
        res.send(results);
    }); 
});

app.put("/update/river_events", (req,res) => {
    let participants = req.body.participants;
    let id = req.body.id;
    let updatePart = `UPDATE river_events SET participants  = ? WHERE id = ? `;
    con.query(updatePart,[participants,id],(err,results) => {
        if(err) console.log(err);
        res.send(results);
    }); 
});

app.put("/update/lake_events", (req,res) => {
    let participants = req.body.participants;
    let id = req.body.id;
    let updatePart = `UPDATE lake_events SET participants  = ? WHERE id = ? `;
    con.query(updatePart,[participants,id],(err,results) => {
        if(err) console.log(err);
        res.send(results);
    }); 
});

app.put("/update/forest_events/details", (req,res) => {
    let id = req.body.id;
    let address = req.body.address;
    let time = req.body.time;
    let date = req.body.date;
    let participantsLimit = req.body.participantsLimit;
    let participants = req.body.participants;

    let updatePart = `UPDATE forest_events SET address = ? , time = ? , date = ? , participantsLimit = ?,participants  = ?  WHERE id = ? `;
    con.query(updatePart,[address,time,date,participantsLimit,participants,id],(err,results) => {
        if(err) console.log(err);
        res.send(results);
        console.log(req.body);
    }); 
});

app.put("/update/river_events/details", (req,res) => {
    let id = req.body.id;
    let address = req.body.address;
    let time = req.body.time;
    let date = req.body.date;
    let participantsLimit = req.body.participantsLimit;
    let participants = req.body.participants;

    let updatePart = `UPDATE river_events SET address = ? , time = ? , date = ? , participantsLimit = ?,participants  = ?  WHERE id = ? `;
    con.query(updatePart,[address,time,date,participantsLimit,participants,id],(err,results) => {
        if(err) console.log(err);
        res.send(results);
        console.log(req.body);
    }); 
});

app.put("/update/lake_events/details", (req,res) => {
    let id = req.body.id;
    let address = req.body.address;
    let time = req.body.time;
    let date = req.body.date;
    let participantsLimit = req.body.participantsLimit;
    let participants = req.body.participants;

    let updatePart = `UPDATE lake_events SET address = ? , time = ? , date = ? , participantsLimit = ?,participants  = ?  WHERE id = ? `;
    con.query(updatePart,[address,time,date,participantsLimit,participants,id],(err,results) => {
        if(err) console.log(err);
        res.send(results);
        console.log(req.body);
    }); 
});

app.delete("/delete/forest_events/:id", (req,res) => {
    let id = req.params.id;
    let updatePart = ` DELETE FROM forest_events WHERE id = ? `;
    con.query(updatePart,id,(err,results) => {
        if(err) console.log(err);
        res.send(results);
        
    }); 
});

app.delete("/delete/river_events/:id", (req,res) => {
    let id = req.params.id;
    let updatePart = ` DELETE FROM river_events WHERE id = ? `;
    con.query(updatePart,id,(err,results) => {
        if(err) console.log(err);
        res.send(results);
        
    }); 
});

app.delete("/delete/lake_events/:id", (req,res) => {
    let id = req.params.id;
    let updatePart = ` DELETE FROM lake_events WHERE id = ? `;
    con.query(updatePart,id,(err,results) => {
        if(err) console.log(err);
        res.send(results);
        
    }); 
});

app.listen(5000, () => {
    console.log("okay test");
});



app.post("/forestApi/insertNewEvent", (req,res) => {
    let address = req.body.address;
    let time = req.body.time;
    let date = req.body.date;
    let participantsLimit = req.body.participantsLimit;
    let participants = req.body.participants;
    let buttonDisable = req.body.buttonDisable;
    let participate = req.body.participate;
    let updatePart = "INSERT INTO forest_events  (address,time,date,participantsLimit,participants,buttonDisable,participate) VALUES (?,?,?,?,?,?,?)";
    con.query(updatePart,[address,time,date,participantsLimit,participants,buttonDisable,participate],(err,results) => {
        if(err) console.log(err);
        res.send(results);
       
    }); 
});

app.post("/riverApi/insertNewEvent", (req,res) => {
    let address = req.body.address;
    let time = req.body.time;
    let date = req.body.date;
    let participantsLimit = req.body.participantsLimit;
    let participants = req.body.participants;
    let buttonDisable = req.body.buttonDisable;
    let participate = req.body.participate;
    let updatePart = "INSERT INTO river_events  (address,time,date,participantsLimit,participants,buttonDisable,participate) VALUES (?,?,?,?,?,?,?)";
    con.query(updatePart,[address,time,date,participantsLimit,participants,buttonDisable,participate],(err,results) => {
        if(err) console.log(err);
        res.send(results);
       
    }); 
});

app.post("/lakeApi/insertNewEvent", (req,res) => {
    let address = req.body.address;
    let time = req.body.time;
    let date = req.body.date;
    let participantsLimit = req.body.participantsLimit;
    let participants = req.body.participants;
    let buttonDisable = req.body.buttonDisable;
    let participate = req.body.participate;
    let updatePart = "INSERT INTO lake_events  (address,time,date,participantsLimit,participants,buttonDisable,participate) VALUES (?,?,?,?,?,?,?)";
    con.query(updatePart,[address,time,date,participantsLimit,participants,buttonDisable,participate],(err,results) => {
        if(err) console.log(err);
        res.send(results);
       
    }); 
});
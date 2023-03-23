var mysql = require('mysql') ;

var con = mysql.createConnection({
    host:'localhost',
    user: 'mher',
    password: 'Keziinch1',
    database:'diplomadb'
});

con.connect(function(err) {
    if(err) throw err;
    console.log("connected");
    let insertValuesquery = "INSERT INTO forest_events (address,time,date,participantsLimit,participants) VALUES('Zeytun','4:00','2/2/2024',10,0)"
    con.query(insertValuesquery, function (err,result){
        if(err) throw err;
        console.log("values inserted");
    })
})
const express = require("express");
const app = express();
const port = 3000;


var mysql  = require('mysql');  
 
var connection = mysql.createConnection({     
  host     : 'localhost',       
  user     : 'root',              
  password : '1q2w3e',       
  port: '3306',                   
  database: 'node_mysql' 
}); 
 
connection.connect();
 
var  sql = 'SELECT * FROM student';
//查
connection.query(sql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
 
       console.log('--------------------------SELECT----------------------------');
       console.log(result);
       console.log('------------------------------------------------------------\n\n');  
});
 
connection.end();


app.get("/aa", (req, res) => {
  res.send({
    name: "zs",
    age: "19"
  })
})

app.listen(port, () => {
  console.log(`is listen ${port} ...`);
})
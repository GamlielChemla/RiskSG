let express = require('express')
let mysql = require('mysql');
let app = express();

const port = 5000;


let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'rina3004',
  database: "risk"

});
connection.connect(function (err) {
  if (!!err) {
    console.log('error: ' + err.message);
  } else {
    console.log("connect");

  }
});


app.get('/a', function (req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Max-Age', 86400)
  res.header('Access-Control-Allow-Headers', '*');
  
  const mycheck = (item)=>{
    return new Promise ((resolve,reject)=>{
      setTimeout(()=>{
        resolve(item)
      },5000)
    }).then(function(result){
      console.log(result);
      res.send(result)
      
    })
  }
  let adr = 'ramot';
  let sql = "SELECT * FROM test"

  // let sql = "SELECT* FROM bug";
  // let sql = "ALTER TABLE bug AUTO_INCREMENT = 1";
  // AND CREATE TABLE Delivery delayed (week INT AUTO_INCREMENT PRIMARY KEY, probability int, concequence int, mitigation VARCHAR(255), reason VARCHAR(255)) AND ";
  // let value=[
  //   [2,5,'new programer','sick'],[1,1,'good job','hard work'],
  //   [2,5,'new programer','sick'],[1,1,'good job','hard work'],
  //   [2,5,'new programer','sick'],[1,1,'good job','hard work'],
  // ]
  let myData = "avi";
  connection.query(sql, function (err, result, files, rows) {
    if (err) {
      console.log('error query ');
    } else {
      console.log("succes ", setTimeout(()=>{console.log(result)}),6000)
      mycheck(result).then(
        result => result

      )
      // myData = result;
    }
  })
  res.send(myData)
})
app.listen(port, () => console.log(`server ${port}`))
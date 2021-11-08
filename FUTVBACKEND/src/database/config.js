var mysql      = require('mysql2');

var connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_USER_PASSWORD,
  database : process.env.DB_NAME,
  multipleStatements: true
});

connection.connect((err,con)=>{
  if(err){
    console.log(err)
  };
  if(con){
    console.log('Db Conected')
  }

});


module.exports = connection;


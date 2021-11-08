var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_USER_PASSWORD,
  database : process.env.DB_NAME
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


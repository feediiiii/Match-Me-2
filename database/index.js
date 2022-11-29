const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'Fedi',
  password: '9742002751995142',
  database: 'matchme'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('-------> MYSQL CONNECTED')
  }
});

module.exports = connection;
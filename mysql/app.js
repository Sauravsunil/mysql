const mysql = require('mysql2');
const { escape } = require('querystring');
const readline = require('readline-sync')

const connDetails = {
    host: 'localhost',
    user: 'root',
    password: 'Kratos@123',
    database: 'kratos'
}

let connection = mysql.createConnection(connDetails);
// connection.connect((err)=>{
//     console.log(err);
// });

let email = readline.question("Enter the email: ")
// email = mysql.escape(email)

const query = `SELECT * FROM customers WHERE email=? OR id > ?`;
console.log(query);

connection.connect();

connection.query(query,['user3@gmail.com' , 1],(err, result)=>{
    console.table(result);
})

connection.end();
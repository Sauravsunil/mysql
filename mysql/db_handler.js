const mysql=require('mysql2')
const connDetails={
    host:'localhost',
    user:'root',
    password:'Kratos@123',
    database:'kratos'
}
function getConnection(){
    return mysql.createConnection(connDetails);

}
function executeQuery(query,parameters,callback){
    let connection=getConnection();
    connection.connect();
    connection.query(query,parameters,callback);

}
module.exports.executeQuery=executeQuery;
const db=require('../db_handler')
 function getAll(callback){
    var sql="SELECT * FROM customer"
    db.executeQuery(sql,[],callback)
 }

 function getOne(id,callback){
    var sql="SELECT * FROM customer WHERE id=?"
    db.executeQuery(sql,[id],callback)                   
 }

 
function createOne(data, callback) {
    var sql = "INSERT INTO customer (name,email,age,dob) VALUES (?,?,?,?)";

    var values = [
        data.name,
        data.email,
        data.age,
        data.dob
    ];
    db.executeQuery(sql, values, callback)
}
function update(data, callback) {
    var sql = "UPDATE customer SET (name,email,age,dob) VALUES (?,?,?,?)";

    var values = [
        data.name,
        data.email,
        data.age,
        data.dob
    ];
    db.executeQuery(sql, values, callback)
}

 module.exports.getAll=getAll
 module.exports.getOne=getOne
 module.exports.createOne = createOne
 module.exports.update = update
var connection = require('../db/sql.js');

gettest = (req,res)=>{
    var sql = "select * from user ";
    var sqlArr = [];
    var callBack = (err,data)=>{
        if(err){
          console.log('error!!')
        }else{
          res.send({
            'list':data
          })
        }
     
      }
    connection.sqlConnect(sql,sqlArr,callBack)
}
module.exports = {
    gettest
}
var mysql      = require('mysql');
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'test1',
//   password : '1234',
//   database : 'tt',
//   port : 3306
// });
// const connection2 = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'test1',
//   password : '1234',
//   database : 'project1',
//   port : '3306',
// });
// connection2.connect();

module.exports = {
  config:{
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'project1',
    port : '3306',
  },
  //连接池
  sqlConnect:function(sql,sqlArr,callBack){
    var pool = mysql.createPool(this.config)
    pool.getConnection((err,conn)=>{
      console.log('12345')
      if(err){
        console.log('连接失败');
        return;
      }
      //  事件驱动回调
      conn.query(sql,sqlArr,callBack);
      //释放连接
      conn.release();
    })
  },
  // connection2
}

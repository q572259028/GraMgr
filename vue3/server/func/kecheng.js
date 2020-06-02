var connection = require('../db/sql.js');


//为课程负责人生成的报表
getinf = (req,res)=>{
  let { cid,gid,state } = req.query;
  
  var sql = "select student.sname,class.id,stu_gra_course.grade from class,student,stu_gra_course where student.classid = class.id and  stu_gra_course.cid=? and stu_gra_course.gid=? and stu_gra_course.state=? and stu_gra_course.sid = student.id "
  var sqlArr = [cid,gid,state];
  var callBack = (err, data) => {
    if (err) {
      console.log('error!!')
    } else {
      res.send({
        'data': data
      })

    }
  }
  connection.sqlConnect(sql, sqlArr, callBack)
}
//为课程负责人修改状态
changestatus = (req,res)=>{
  let { sid,cid,gid,state } = req.query;
  
  var sql = "UPDATE stu_gra_course set state = ? where sid=? and cid=? and gid=? "
  var sqlArr = [state,sid,cid,gid];
  var callBack = (err, data) => {
    if (err) {
      console.log('error!!')
    } else {
      res.send({
        'data': state
      })

    }
  }
  connection.sqlConnect(sql, sqlArr, callBack)
}

//为课程负责人生成的报表 以班级为单位
getinf_class = (req,res)=>{
  let { classid,cid,gid,state } = req.query;
  
  var sql = "select student.sname,student.id,stu_gra_course.grade from class,student,stu_gra_course where student.classid = class.id and  stu_gra_course.cid=? and stu_gra_course.gid=? and stu_gra_course.state=? and class.id = ? and stu_gra_course.sid = student.id "
  var sqlArr = [cid,gid,state,classid];
  var callBack = (err, data) => {
    if (err) {
      console.log('error!!')
    } else {
      res.send({
        'data': data
      })

    }
  }
  connection.sqlConnect(sql, sqlArr, callBack)
}

//为某个学生某个评价依据打分
getinf_class = (req,res)=>{
  let { classid,cid,gid,state } = req.query;
  
  var sql = "select student.sname,student.id,stu_gra_course.grade from class,student,stu_gra_course where student.classid = class.id and  stu_gra_course.cid=? and stu_gra_course.gid=? and stu_gra_course.state=? and class.id = ? and stu_gra_course.sid = student.id "
  var sqlArr = [cid,gid,state,classid];
  var callBack = (err, data) => {
    if (err) {
      console.log('error!!')
    } else {
      res.send({
        'data': data
      })

    }
  }
  connection.sqlConnect(sql, sqlArr, callBack)
}
module.exports = {
    getinf,
    getinf_class,
    changestatus
}
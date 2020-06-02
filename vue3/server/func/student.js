var connection = require('../db/sql.js');


//为学生生成课程成绩信息
getinf = (req,res)=>{
  let { sid,cid} = req.query;
  var sql = "select  course_evaluation_basis.content, grade.grade,course_evaluation_basis.weight from grade, course_evaluation_basis where course_evaluation_basis.id = grade.basisid and grade.sid=? and grade.cid=?"
  var sqlArr = [sid,cid];
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

//为学生生成对应指标点的课程成绩信息
get_course_byg = (req,res)=>{
  let { sid,gid} = req.query;
  var sql = "select stu_gra_course.gid,course.cname,course_weight.weight,stu_gra_course.grade from stu_gra_course,course,course_weight where sid = ? and stu_gra_course.gid = ? and course.id = stu_gra_course.cid and course_weight.cid = stu_gra_course.cid and course_weight.gid = stu_gra_course.gid"
  var sqlArr = [sid,gid];
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
//为学生生成所有指标点的课程成绩信息
get_course_byg2 = (req,res)=>{
  let { sid} = req.query;
  var sql = "select stu_gra_course.gid,course.cname,course_weight.weight,stu_gra_course.grade from stu_gra_course,course,course_weight where sid = ? and course.id = stu_gra_course.cid and course_weight.cid = stu_gra_course.cid and course_weight.gid = stu_gra_course.gid"
  var sqlArr = [sid];
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

//查询指标点
get_gra_point = (req,res)=>{
  var sql = "select * from gra_point "
  var sqlArr = [];
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

//查询指标点评价值（按毕业要求）

get_gg = (req,res)=>{
  let { sid} = req.query;
  var sql1 = "SELECT gg.id,gra_point.id gid,stu_gra.grade from gg,gra_point,stu_gra where sid=? and gg.gid = gra_point.id and stu_gra.gid = gra_point.id ";
  var sql2 = "SELECT gg.id,sum(stu_gra.grade) ggrade from gg,gra_point,stu_gra where sid=? and gg.gid = gra_point.id and stu_gra.gid = gra_point.id group by gg.id ";
  var sqlArr = [sid];
  var callBack = (err, data) => {
    if (err) {
      console.log('error!!')
    } else {
      res.send({
        'data': data
      })

    }
  }
  connection.sqlConnect(sql1, sqlArr, callBack)
}

get_gg2 = (req,res)=>{
  let { sid} = req.query;
  var sql1 = "SELECT gg.id,gg.content,gra_point.id,stu_gra.grade from gg,gra_point,stu_gra where sid=? and gg.gid = gra_point.id and stu_gra.gid = gra_point.id ";
  var sql2 = "SELECT gg.id,sum(stu_gra.grade) ggrade from gg,gra_point,stu_gra where sid=? and gg.gid = gra_point.id and stu_gra.gid = gra_point.id group by gg.id ";
  var sqlArr = [sid];
  var callBack = (err, data) => {
    if (err) {
      console.log('error!!')
    } else {
      res.send({
        'data': data
      })

    }
  }
  connection.sqlConnect(sql2, sqlArr, callBack)

}

get_gg3 = (req,res)=>{
  let { sid,ggid} = req.query;
  var sql1 = "SELECT gg.id,gg.content,gra_point.id gid,gra_point.content, stu_gra.grade from gg,gra_point,stu_gra where sid=? and gg.id = ? and gg.gid = gra_point.id and stu_gra.gid = gra_point.id ";
  var sql2 = "SELECT gg.id,sum(stu_gra.grade) ggrade from gg,gra_point,stu_gra where sid=? and gg.gid = gra_point.id and stu_gra.gid = gra_point.id group by gg.id ";
  var sqlArr = [sid,ggid];
  var callBack = (err, data) => {
    if (err) {
      console.log('error!!')
    } else {
      res.send({
        'data': data
      })

    }
  }
  connection.sqlConnect(sql1, sqlArr, callBack)
}

get_gg4 = (req,res)=>{
  let { sid,ggid} = req.query;
  var sql1 = "SELECT gg.id,gra_point.id,stu_gra.grade from gg,gra_point,stu_gra where sid=? and gg.id = ? and gg.gid = gra_point.id and stu_gra.gid = gra_point.id ";
  var sql2 = "SELECT gg.id,min(stu_gra.grade) ggrade from gg,gra_point,stu_gra where sid=? and gg.id = ? and gg.gid = gra_point.id and stu_gra.gid = gra_point.id group by gg.id ";
  var sqlArr = [sid,ggid];
  var callBack = (err, data) => {
    if (err) {
      console.log('error!!')
    } else {
      res.send({
        'data': data
      })

    }
  }
  connection.sqlConnect(sql2, sqlArr, callBack)

}

//显示评价依据的评价值
get_basis = (req,res)=>{
  let { sid,cid} = req.query;
  var sql1 = "select course_point.id cpid,course_point.content cpcouent,gra_point.id gid,gra_point.content gcontent, sum(grade.grade)/sum(course_evaluation_basis.weight) evaluation from course_point,course_evaluation_basis,grade,gra_point where grade.basisid = course_evaluation_basis.id and grade.sid=? and grade.cid=? and gra_point.id=course_point.gid and course_evaluation_basis.cpid = course_point.id group by course_point.id ";
 // var sql2 = "SELECT gg.id,sum(stu_gra.grade) ggrade from gg,gra_point,stu_gra where sid=? and gg.id = ? and gg.gid = gra_point.id and stu_gra.gid = gra_point.id group by gg.id ";
  var sqlArr = [sid,cid];
  var callBack = (err, data) => {
    if (err) {
      console.log('error!!')
    } else {
      res.send({
        'data': data
      })

    }
  }
  connection.sqlConnect(sql1, sqlArr, callBack)

}

//显示评价依据的其他信息
get_basis2 = (req,res)=>{
  let { sid,cid,gid} = req.query;
  var sql1 = "select course_evaluation_basis.content,course_evaluation_basis.weight,grade.grade from course_point,course_evaluation_basis,grade,gra_point where grade.basisid = course_evaluation_basis.id and grade.sid=? and grade.cid=? and gra_point.id=course_point.gid and course_evaluation_basis.cpid = course_point.id and gra_point.id = gid and gid =?";
 // var sql2 = "SELECT gg.id,sum(stu_gra.grade) ggrade from gg,gra_point,stu_gra where sid=? and gg.id = ? and gg.gid = gra_point.id and stu_gra.gid = gra_point.id group by gg.id ";
  var sqlArr = [sid,cid,gid];
  var callBack = (err, data) => {
    if (err) {
      console.log('error!!')
    } else {
      res.send({
        'data': data
      })

    }
  }
  connection.sqlConnect(sql1, sqlArr, callBack)

}
module.exports = {
    getinf,
    get_gra_point,
    get_gg,
    get_gg2,
    get_gg3,
    get_gg4,
    get_course_byg,
    get_course_byg2,
    get_basis,
    get_basis2
}
var connection = require('../db/sql.js');


//根据老师id显示他负责的课程
get_course_id = (req,res)=>{
  let { id} = req.query;
  var sql = "select course.cname,course.id from course where teacher = ?"
  var sqlArr = [id];
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

//查询某课程某班级学生在某指标点的成绩
get_student = (req,res)=>{
    let { classname,cname,gid} = req.query;
    var sql = "select student.id,student.sname,stu_gra_course.grade from student,stu_gra_course,course,class where stu_gra_course.sid=student.id and student.classid=class.id and class.cname = ? and stu_gra_course.cid=course.id and course.cname = ? and stu_gra_course.gid=?"
    var sqlArr = [classname,cname,gid];
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
  //查询某课程某班级id学生在某指标点的成绩
  get_student2 = (req,res)=>{
    let { classid,cname,gid} = req.query;
    var sql = "select student.id,student.sname,stu_gra_course.grade from student,stu_gra_course,course where stu_gra_course.sid=student.id and student.classid = ? and stu_gra_course.cid=course.id and course.cname = ? and stu_gra_course.gid=?"
    var sqlArr = [classid,cname,gid];
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
  
//查询某课程的评价依据
get_course_inf = (req,res)=>{
  let { cid} = req.query;
  var sql = "select course_evaluation_basis.id,course_evaluation_basis.cpid,course_evaluation_basis.content,course_evaluation_basis.weight from course_evaluation_basis,course_point where course_evaluation_basis.cpid = course_point.id and course_point.cid=?"
  var sqlArr = [cid];
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
    get_course_id,
    get_student,
    get_student2,
    get_course_inf
}
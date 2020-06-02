var connection = require('../db/sql.js');


//输入毕业指标点
insertgra = (req, res) => {
  let { id, content } = req.query;
  var sql = "INSERT INTO gra_point values(?,?);"
  var sqlArr = [id, content];
  var callBack = (err, data) => {
    if (err) {
      console.log('error!!')
    } else {
      res.send({
        'data': content
      })
    }
  }
  connection.sqlConnect(sql, sqlArr, callBack)
}

//输入毕业要求指标点和课程之间的关系
insertgracourse = (req, res) => {
  let { cid, gid, weight } = req.query;
  var sql = "INSERT INTO course_weight values(?,?,?)"
  var sqlArr = [cid, gid, weight];
  var callBack = (err, data) => {
    if (err) {
      console.log('error!!')
    } else {
      res.send({
        'data': 1
      })
    }
  }
  connection.sqlConnect(sql, sqlArr, callBack)
}


//按年级生成的报表
getgrade = (req, res) => {
  let { gid } = req.query;
  var sql = "select student.grade,avg(stu_gra.grade) avg,MAX(stu_gra.grade) max,MIN(stu_gra.grade) min from student left join stu_gra on student.id = stu_gra.sid  where gid = ? group by student.grade  "
  var sqlArr = [gid];
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

//按班级生成的报表
getclass = (req, res) => {
  let { gid } = req.query;
  var sql = "select student.classid,avg(stu_gra.grade),MAX(stu_gra.grade),MIN(stu_gra.grade) from student left join stu_gra on student.id = stu_gra.sid  where gid = ? group by student.classid  "
  var sqlArr = [gid];
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


//按课程生成的报表
getcourse = (req, res) => {
  let { gid } = req.query;
  var sql = "select course.cname , avg(stu_gra_course.grade),MIN(stu_gra_course.grade),MAX(stu_gra_course.grade) from course,stu_gra_course where course.id = stu_gra_course.cid and gid = ? group by course.id  "
  var sqlArr = [gid];
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

//按专业生成的报表
getmajor = (req, res) => {
  let { gid } = req.query;
  var sql = "select  avg(stu_gra_course.grade) avg,MIN(stu_gra_course.grade) min,MAX(stu_gra_course.grade) max from course,stu_gra_course where course.id = stu_gra_course.cid and gid = ?  "
  var sqlArr = [gid];
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

//修改指标点
updata_gra_point = (req, res) => {
  let { gid, content } = req.query;
  var sql = "UPDATE gra_point set gra_point.content = ? where gra_point.id=?"
  var sql2 = "UPDATE stu_gra set stu_gra.context=? where stu_gra.gid = ? "
  var sqlArr = [content, gid];
  var callBack = (err, data) => {
    if (err) {
      console.log('error!!')
    } else {
      res.send({
        'data': content
      })

    }
  }
  var callBack2 = (err, data) => {
    if (err) {
      console.log('error!!')
    } else {
    }
  }
  connection.sqlConnect(sql, sqlArr, callBack)
  connection.sqlConnect(sql2, sqlArr, callBack2)
}
//查询对应年级，班级，课程，指标点的成绩
get_all = (req, res) => {
  let { grade,classid,cid,gid } = req.query;
  var sql1="",sql2="",sql3="",sql4="";
  var sql11="any_value(student.grade) grade, ",sql22=" any_value(student.classid) classid,any_value(class.cname) classname, ",sql33="any_value(cid) cid,any_value(course.cname) cname, ",sql44=" any_value(gid) gid, ";
  var sqlArr = []
  if(grade!=0)
  {
    sql1 = " and student.grade=? ";
    sql11 = ""
    sqlArr.push(grade)
  }
  if(classid!=0)
  {
    sql2 = " and classid =? "
    sql22 = ""
    sqlArr.push(classid)
  }
  if(cid!=0)
  {
    sql3= " and cid = ? "
    sql33 = ""
    sqlArr.push(cid)
  }
  if(gid!=0)
  {
    sql4=" and gid = ? "
    sql44 = ""
    sqlArr.push(gid)
  }
  var sql = "select "+ sql11+sql22+sql33+sql44+" avg(stu_gra_course.grade) avg,MIN(stu_gra_course.grade) min,MAX(stu_gra_course.grade) max from student,course,stu_gra_course,class where student.classid=class.id and student.id = stu_gra_course.sid and course.id = stu_gra_course.cid "+sql1+sql2+sql3+sql4;
  console.log('error!!',sql)
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
//查询支撑矩阵
check_mat = (req, res) => {
  let { ggid, gid, cid } = req.query;
  var sql = "";
  var sqlArr = [];
  if (ggid != 0) {
    sql = "select gg.id,course_weight.gid,course.id cid,course.cname,course_weight.weight from gg,course,course_weight where gg.gid = course_weight.gid and course.id = course_weight.cid and gg.id = ?"
    sqlArr = [ggid]
  }
  else if (gid != 0) {
    sql = "select gg.id,course_weight.gid,course.id cid,course.cname,course_weight.weight from gg,course,course_weight where gg.gid = course_weight.gid and course.id = course_weight.cid and gg.gid = ?"
    sqlArr = [gid]
  }
  else if (cid != 0) {
    sql = "select gg.id,course_weight.gid,course.id cid,course.cname,course_weight.weight from gg,course,course_weight where gg.gid = course_weight.gid and course.id = course_weight.cid and course.id = ?"
    sqlArr = [cid]
  }
  else {
    sql = "select gg.id,course_weight.gid,course.id cid,course.cname,course_weight.weight from gg,course,course_weight where gg.gid = course_weight.gid and course.id = course_weight.cid"
    sqlArr = []
  }
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
//按课程生成的班级报表
getcourse_class = (req, res) => {
  let { gid ,cid} = req.query;
  var sql = "select any_value(student.classid) classid,any_value(teacher.teacher_name) teachername,avg(stu_gra_course.grade) avg,MAX(stu_gra_course.grade) max,MIN(stu_gra_course.grade) min from teacher,student , stu_gra_course,course where teacher.id = course.teacher and student.id = stu_gra_course.sid and gid = ? and stu_gra_course.cid = ? and course.id = stu_gra_course.cid group by student.classid  "
  var sqlArr = [gid,cid];
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
  insertgra,
  insertgracourse,
  getgrade,
  getclass,
  getcourse,
  updata_gra_point,
  getmajor,
  check_mat,
  get_all,
  getcourse_class
}



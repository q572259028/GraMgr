var express = require('express');
const fs = require('fs')
var bodyParser = require('body-parser');
var xlsx = require('node-xlsx');
var router = express.Router();
var connection = require('../db/sql.js');
var teacher = require('../func/teacher.js');
var student = require('../func/student.js');
var zhuanye = require('../func/zhuanye.js');
var daoyuan = require('../func/daoyuan.js');
var kecheng = require('../func/kecheng.js');
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/testjson', function (req, res, next) {
  // var originFilename = 'D:/vue3/server/func/aaa.xlsx';
  console.log(req.body)
  res.json(req.body)

});

router.get('/testexcel', function upload(req, res, next) {
  req.busboy.on('file', function (fieldname, file, filename, encoding, mimetype) {
    var tmp_path = path.join(os.tmpDir(), path.basename(filename));
    file.pipe(fs.createWriteStream(tmp_path));
    file.on('end', function () {
      var uuid = tool.generateUUID();
      commfile.savePathFile(uuid, mimetype, tmp_path, true, function (err, fileBase64) {
        if (err) {
          res.json({
            success: false,
            url: ''
          });
        } else {
          res.json({
            success: true,
            url: '/file/' + uuid
          });
        }
      });
    });
  });

  req.pipe(req.busboy);
});
router.get('/testexcel2', function upload(req, res, next) {
  var originFilename = 'D:/vue3/server/func/zhibiaodian.xlsx';
  var list = xlsx.parse(originFilename);
  console.log('error!!', list[0].data);
  console.log('error!!', list[0].data.length);
  var len = list[0].data.length;
  var sql = "insert into gra_point values(?,?) "
  for (var i = 1; i < len; i++) {
    var sqlArr = [list[0].data[i][0], list[0].data[i][1]];
    var callBack = (err, data) => {
      if (err) {
        console.log('error!!')
      } else {
      
      }
    }
    connection.sqlConnect(sql, sqlArr, callBack);
  }
  res.send({
    'type': -1
  });
})
router.get('/testexcel3', function upload(req, res, next) {
  var originFilename = 'D:/vue3/server/func/ZX.xlsx';
  var list = xlsx.parse(originFilename);
  console.log('error!!', list[0].data);
  console.log('error!!', list[0].data.length);
  var len = list[0].data.length;
  var sql = "insert into grade values(?,?,?,?) "
  for (var i = 1; i < len; i++) {
    var sqlArr = [list[0].data[i][4], list[0].data[i][5],list[0].data[i][6],list[0].data[i][7]];
    var callBack = (err, data) => {
      if (err) {
        console.log('error!!')
      } else {
      
      }
    }
    connection.sqlConnect(sql, sqlArr, callBack);
  }
  res.send({
    'type': -1
  });
})
//登录验证
router.get('/login', function (req, res, next) {
  //var originFilename = 'D:/vue3/server/func/aaa.xlsx';
  //var list = xlsx.parse(originFilename);
  //console.log('error!!', list[0].data)
  let { username, password } = req.query;
  var sql = "select * from user where username=? and password=?";
  var sqlArr = [username, password];
  var callBack = (err, data) => {
    if (err) {
      console.log('error!!')
    } else {
      // res.send({
      //   'a':data.length
      // })
      if (data.length == 1) {

        res.send({
          'type': data[0].type
        })
      } else {
        res.send({
          'type': -1
        })
      }
    }

  }
  connection.sqlConnect(sql, sqlArr, callBack)


});

//学生查询个人毕也达成度 
router.get('/checkgra', function (req, res, next) {
  let { id } = req.query;
  var sql = "select * from stu_gra where sid=" + id;
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
});

//任课老师修改学生指标点评价值
router.get('/updategra', function (req, res, next) {
  let { sid, cid, gid, value } = req.query;
  var sql1 = "select weight from course_weight where cid = " + cid + " and gid = " + gid;
  var sql2 = "select grade from stu_gra_course where cid = " + cid + " and gid = " + gid + " and sid = " + sid;
  var sql3 = "update stu_gra_course set grade = " + value + " where cid = " + cid + " and sid = " + sid + " and gid = " + gid;
  var weight = 0;
  var oldv = 0;
  var callBack2 = (err, data) => {
    if (err) {
      console.log('error!!')
    } else {
      console.log('error!!')
      oldv = data[0].grade;
      console.log('oldv', oldv);
      console.log('value', value);
      console.log('weight2', weight);
      dv = (value - oldv) * weight;
      console.log('dv ', dv);

      var callBack4 = (err, data) => {
        if (err) {
          console.log('error!!')
        } else {
          console.log("success insert!!")

        }
      }
      var sql4 = "update stu_gra set grade=grade+" + dv + " where sid = " + sid + " and gid= " + gid;
      connection.sqlConnect(sql4, [], callBack4);
    }
  }
  var callBack1 = (err, data) => {
    if (err) {
      console.log('error!!')
    } else {

      weight = data[0].weight;
      console.log('weight1', weight);
    }
  }
  var callBack3 = (err, data) => {
    if (err) {
      console.log('error!!')
    } else {
      console.log("success insert")
      res.send({
        data: value
      })
    }
  }
  connection.sqlConnect(sql3, [], callBack3);
  connection.sqlConnect(sql1, [], callBack1);
  connection.sqlConnect(sql2, [], callBack2);
});




router.get('/getcourse', kecheng.getinf);
router.get('/getinf_class', kecheng.getinf_class);
router.get('/changestatus', kecheng.changestatus);

router.get('/majorinsert', zhuanye.insertgra);
router.get('/majorinsert2', zhuanye.insertgracourse);
router.get('/getgrade', zhuanye.getgrade);
router.get('/getclass', zhuanye.getclass);
router.get('/getcourse2', zhuanye.getcourse);
router.get('/updataGraPoint', zhuanye.updata_gra_point);
router.get('/getmajor', zhuanye.getmajor);
router.get('/check_mat', zhuanye.check_mat);
router.get('/get_all', zhuanye.get_all);
router.get('/getcourse_class', zhuanye.getcourse_class);


router.get('/getGraPoint', student.get_gra_point);
router.get('/stucourse', student.getinf);
router.get('/get_gg', student.get_gg);
router.get('/get_gg2', student.get_gg2);
router.get('/get_gg3', student.get_gg3);
router.get('/get_gg4', student.get_gg4);
router.get('/get_course_byg', student.get_course_byg);
router.get('/get_course_byg2', student.get_course_byg2);
router.get('/get_basis', student.get_basis);
router.get('/get_basis2', student.get_basis2);



router.get('/get_course_id', teacher.get_course_id);
router.get('/get_student', teacher.get_student);
router.get('/get_student2', teacher.get_student2);
router.get('/get_course_inf', teacher.get_course_inf);

//router.get('/test', cate.gettest);


module.exports = router;

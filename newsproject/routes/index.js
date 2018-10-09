var express = require('express');
var router = express.Router();
const conn = require("./MySqlConnection");

/* GET home page. */
router.get('/', function (req, res, next) {
    var indexcontent = {
        title: "self",
        classlist: {},
        selectCount: 0
    };
    var connquery_count = 0;
    conn.query("SELECT * FROM class", function (err, result) {
        if (!err) {
            indexcontent.classlist = result;
            indexcontent.selectCount++;
        } else {
            console.log(err)
        }
        connquery_count++;
    });
    var sqlselect = setInterval(function () {
        if (connquery_count == 1) {
            clearInterval(sqlselect);
            res.render("index", {Content: indexcontent});
        }
    }, 100);
});
router.post('/theStudentList', function (req, res, next) {
    console.log(req.query.projectCount);
    conn.query("SELECT * FROM `student` WHERE `cid`=" + req.body.cid, function (err, result) {
        if (!err) {
            res.json({status: 1, retrunback: result});
        } else {
            res.json({status: 0, retrunback: err});
        }
    });
});
router.get('/theDateList', function (req, res, next) {
    res.json({status: 1});
});
router.post('/addDateList', function (req, res, next) {
    res.json({status: 1});
});
router.post('/deleteDateList', function (req, res, next) {
    res.json({status: 1});
});

router.post('/addClass', function (req, res, next) {
    console.log(req.query.projectCount);
    conn.query("INSERT `jmhz_company` (`id`,`company`,`city`,`address`,`contact`,`phone`,`email`,`weixin_public`) " +
        "VALUE ('','" + req.body.company + "','" + req.body.city + "','" + req.body.address + "','" + req.body.contact + "','" + req.body.phone +
        "','" + req.body.email + "','" + req.body.weixin_public + "')", function (err, result) {
        if (!err) {
            res.json({status: 1, retrunback: result});
        } else {
            res.json({status: 0, retrunback: err});
        }
    });
});

router.post('/deleteClass', function (req, res, next) {
    console.log(req.query.projectCount);
    res.json({status: 1});
});
router.post('/addStudent', function (req, res, next) {
    res.json({status: 1});
});
router.post('/deleteStudent', function (req, res, next) {
    res.json({status: 1});
});
module.exports = router;
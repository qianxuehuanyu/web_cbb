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


router.post('/addClass', function (req, res, next) {
    conn.query("INSERT `class` (`cid`,`classname`,`des`,`has`) " +
        "VALUE ('','" + req.body.classname + "','" + 111 + "','" + 1 + "')",
        function (err, result) {
            if (!err) {
                res.json({status: 1, retrunback: result});
            } else {
                res.json({status: 0, retrunback: err});
            }
        });
});
module.exports = router;
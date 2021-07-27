const express = require("express");
const router = express.Router();
const UsersService = require("../module/userServices");

router.route("/").get(function (req, res, next) {
  const db = req.app.get("db");
  UsersService.getCountires(db).then((data) => {
    res.send(data);
  });
});

// Here we are getting data from the URL. We are capturing query params from the URL
router.route("/getSearchList").get(function (req, res, next) {
  const db = req.app.get("db");
  const gpa = req.query.gpa;
  const greScore = req.query.gre_score;
  const country = req.query.country;
  const course = req.query.course;
  UsersService.getSearchData(db, gpa, greScore, country, course).then(
    (data) => {
      res.send(data["rows"]);
      console.log(data["rows"]);
    }
  );
});

module.exports = router;

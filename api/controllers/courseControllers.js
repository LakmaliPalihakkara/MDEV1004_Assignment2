var mongoose = require("mongoose");
var Course = require("../models/courseModel");
function create_example() {
  Course.create(
    {
      course_name: "Mobile App Portfolio",
      course_id: 100,
      course_description: "This is mobile app portfolio course",
    },
    function (err, instance) {
      if (err) return handleError(err);
    }
  );

  Course.create(
    {
      course_name: "Cross Platform",
      course_id: 101,
      course_description: "This is cross platform course",
    },
    function (err, instance) {
      if (err) return handleError(err);
    }
  );

  Course.create(
    {
      course_name: "Data Management",
      course_id: 102,
      course_description: "This is data management course",
    },
    function (err, instance) {
      if (err) return handleError(err);
    }
  );
  console.log("Example data added");
}

//Display list of all courses
exports.list_all_courses = function (req, res) {
  Course.find({}, function (err, course) {
    if (err) res.send(err);
    res.json(course);
  });
};
create_example();
exports.create_a_course = function (req, res) {
  var new_course = new Course(req.body);
  new_course.save(function (err, course) {
    if (err) res.send(err);
    res.json(course);
  });
};

exports.read_a_course = function (req, res) {
  Course.findOne({ course_id: req.params.ID }, function (err, course) {
    if (err) res.send(err);
    res.json(course);
  });
};

exports.update_a_course = function (req, res) {
  Course.findOneAndUpdate(
    { course_id: req.params.ID },
    req.body,
    function (err, course) {
      if (err) res.send(err);
      res.json({ message: "Record updated successfully" });
    }
  );
};

exports.delete_a_course = function (req, res) {
  Course.deleteOne({ course_id: req.params.ID }, function (err, course) {
    if (!err) {
      res.json(course);
    } else {
      res.send(err);
    }
  });
};

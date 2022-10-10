var mongoose = require("mongoose");
var Course = mongoose.model("Courses");

//Display list of all courses
exports.list_all_courses = function (req, res) {
  Course.find({}, function (err, course) {
    if (err) res.send(err);
    res.json(course);
  });
};

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

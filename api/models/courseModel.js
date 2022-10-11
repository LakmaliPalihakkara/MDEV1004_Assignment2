var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var courseSchema = new Schema({
  course_name: {
    type: String,
    required: "Please enter the name of your course",
  },
  course_id: {
    type: Number,
  },
  course_description: {
    type: String,
  },
});

module.exports = mongoose.model("Courses", courseSchema);

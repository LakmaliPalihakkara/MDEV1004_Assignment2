const express = require("express");
const router = express.Router();
var coursesList = require("../controllers/courseControllers");

// middleware that is specific to this router
router.use((req, res, next) => {
  next();
});

router.get("/", coursesList.list_all_courses);
router.post("/", coursesList.create_a_course);
router.delete("/:ID", coursesList.delete_a_course);
router.put("/:ID", coursesList.update_a_course);
router.get("/:ID", coursesList.read_a_course);

module.exports = router;

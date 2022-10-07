module.exports = function(app){
	var coursesList = require('../controllers/courseControllers');


	//Course Routes

	app.route('/courses')
	.get(coursesList.list_all_courses)
	.post(coursesList.create_a_course);
};
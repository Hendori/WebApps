const URL="CursussenServlet",
	CURSUSVELD = "#cursussen",
	METHOD="GET",
    LI = "li",
    UL = "ul";

$(document).ready(function(){
	$.ajax(URL, {
		type: METHOD,
	})
	.done(displayCourses);
});

function displayCourses(data) {
	/*<aanvullen>*/
	var courseList = createCourseList();
	cursussen.forEach(function(cursus) {
		courseList.append(createCourse(cursus.code, cursus.name));
		$(CURSUSVELD).append(courseList);
	})
	
}
function createCourse(code, courseName) {
	console.log(code + ",  " + courseName);
	return $(document.createElement(LI)).html(code + ", " + courseName);
}
function createCourseList() {
	return $(document.createElement(UL));
}
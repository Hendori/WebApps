const URL="CursussenServlet",
	CURSUSVELD = "#cursussen",
	METHOD="GET",
    LI = "li",
    UL = "ul",
    CURSUS = "cursus",
    CURSUSSEN = "cursussen",
    NAAM = "naam", 
    CODE = "code";

$(document).ready(function(){
	$.ajax(URL, {
		type: METHOD,
	})
	.done(displayCourses);
});

function displayCourses(xmlData) {
	var xmlCursussen = $.parseXML(xmlData);
	var cursussen = $(xmlCursussen).find(CURSUSSEN);
	var cursuslijst = $(cursussen).find(CURSUS);
	var courseList = createCourseList();
	cursuslijst.each(function(index, cursus) {
		var code = $(cursus).attr(CODE);
		var name = $(cursus).attr(NAAM);
		courseList.append(createCourse(code, name));
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
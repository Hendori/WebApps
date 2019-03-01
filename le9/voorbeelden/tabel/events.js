$(document).ready(function() {
   $(document).click(function() {
    $(this).css("background-color", "MistyRose");
  });
   $("html").click(function() {
    $(this).css("background-color", "PaleTurquoise");
  });
   $("body").click(function() {
    $(this).css("background-color", "DarkSlateBlue");
  });
   $("table").click(function() {
    $(this).css("background-color", "DarkGreen");
  });
	$("tr").click(function() {
    $(this).css("background-color", "Teal");
  });
  $("td").click(function() {
    $(this).css("background-color", "DarkOrange");
  });
});
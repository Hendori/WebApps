$(document).ready(function() {
   $(document).click(function() {
    alert("bij document");
  });
   $("html").click(function() {
    alert("bij html");
  });
   $("body").click(function() {
    alert("bij body");
  });
   $("table").click(function() {
    alert("bij table");
  });
	$("tr").click(function() {
    alert("bij tr");
  });
  $("td").click(function() {
    alert("bij td");
  });
});
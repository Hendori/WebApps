const SERVLETURL = "PlaatsServlet",
      ITEM = "option",
	  DATALIST = "#plaatsen",
	  INVOERVELD = "#invoerveld";

$(document).ready(function() {
	$(INVOERVELD).keyup(autoComplete);
});

function autoComplete() {
	$.ajax(
		SERVLETURL,
		{
			type : "POST",
			data : {
				plaatsnaam : $(INVOERVELD).val().trim().toUpperCase()
			}
		})
		.done(fillList);
}

function fillList(result) {
	$(DATALIST).empty();
	result.forEach(function(option) {
		$(DATALIST).append($(document.createElement(ITEM)).html(option));
		$(DATALIST).show();
	});
};
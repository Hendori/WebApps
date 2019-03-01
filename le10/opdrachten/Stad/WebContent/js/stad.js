/*<invullen>*/

function fillList(result) {
	$(DATALIST).empty();
	result.forEach(function(option) {
		$(DATALIST).append($(document.createElement(ITEM)).html(option));
		$(DATALIST).show();
	});
};


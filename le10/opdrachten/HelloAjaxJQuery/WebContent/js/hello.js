const URL="HelloServlet",
	HELLOFORM = "#helloform",
	METHOD="GET",
	NAAM = "#voornaam",
	RESPONSE = "#ajaxresponse",
    WRONG = "Er ging iets mis...";

$(document).ready(function(){
	$(HELLOFORM).submit(function(event) {
		event.preventDefault();
		$.ajax(URL, {
			type: METHOD,
		    data: {
		    	naam : $(NAAM).val()
		    }
		})
		.done(function(data) {
			$(RESPONSE).html(data);
		})
		.fail(function() {
			$(RESPONSE).html(WRONG);
		});
	});
});
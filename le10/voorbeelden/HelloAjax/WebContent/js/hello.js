const URL="HelloServlet",
    HELLOFORM = "#helloform",
    METHOD="GET",
    NAAM = "#voornaam",
    DONE = 4,
    RESPONSE = "#ajaxresponse";


$(document).ready(function(){
  $(HELLOFORM).submit(function(event) {
    event.preventDefault();
    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
      if (ajax.readyState == DONE) {
        $(RESPONSE).html(ajax.response);
      }
    }
    ajax.open(METHOD, URL + "?naam=" + $(NAAM).val(), true);
    ajax.send(null);
  });
});



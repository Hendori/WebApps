$(document).ready(init);

// Constanten
const OEFENVELD      = "#oefenVeld",
      CLASS_FEEDBACK = ".feedback",
	  PATTERN        = "pattern",
	  TITLE          = "title",
	  CHANGE         = "change";  

// Binden van eventhandlers
function init() {
 $(OEFENVELD).on(CHANGE, validateVeld);
}

// Eventhandlers
function validateVeld(){
   // Declaratie variabelen en inlezen gegevens uit HTML
   var  el      = $(OEFENVELD),
        pattern = el.attr(PATTERN),
        value   = el.val(),
        title   = el.attr(TITLE),
		regex   = new RegExp(pattern)
		valid   = undefined,
		fbVeld  = $(CLASS_FEEDBACK),
		OK      = "&#10003;";
   // Verwerking
   valid = regex.test(value);
   // Wegschrijven resultaat naar HTML.
   if (valid) {
	fbVeld.html(OK);
   }
   else {
    fbVeld.html(title);
   } 
}

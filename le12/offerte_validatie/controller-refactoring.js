$(document).ready(init);

// Constanten
const BLUR             = "blur",
      POSTCODE         = "#postcode",
      GEBOORTEDATUM    = "#geboortedatum",
      SCHADEVRIJEJAREN = "#schadevrijejaren",
      KENTEKEN         = "#kenteken",
      INGANGSDATUM     = "#ingangsdatum",
      CLASS_FEEDBACK   = ".feedback",
	    PATTERN          = "pattern",
      CUSTOMPATTERN    = "data-pattern",
      VALID            = "valid",
      INVALID          = "invalid",
	    OK               = "&#10003;",
      NOTOK            = "&#9747;",
      TITLE            = "title",
	    MIN              = "min",
      MAX              = "max",
	    TEKLEIN          = "Alleen hele positieve getallen",  // Feedback bij te kleine waarde
      TEGROOT          = "Alleen getallen kleiner dan 100"; // Feedback bij te groote waarde;

// Binden van eventhandlers
function init() {
  $(POSTCODE).on(BLUR, function() {
    isValidWithRegex($(POSTCODE), PATTERN);
 });
 $(GEBOORTEDATUM).on(BLUR, function() {
    isValidWithRegex($(GEBOORTEDATUM), CUSTOMPATTERN);
 });
 $(SCHADEVRIJEJAREN).on(BLUR, function() {
    isValidWithMinMax($(SCHADEVRIJEJAREN));
 });
 $(KENTEKEN).on(BLUR, function() {
    isValidWithRegex($(KENTEKEN), PATTERN);
 });
 $(INGANGSDATUM).on(BLUR, function() {
    isValidWithRegex($(INGANGSDATUM), CUSTOMPATTERN);
 });
}

function isValidWithMinMax(field) {
   // Declareren variabelen en inlezen gegevens HTML
   var isvalid      = false,
       fbVeld       = field.next(CLASS_FEEDBACK),
	     value        = parseInt(field.val(),10),
       pattern      = field.attr(CUSTOMPATTERN),
	     regex        = new RegExp(pattern),
       title        = field.attr(TITLE),
	     min          = field.attr(MIN),
	     max          = field.attr(MAX),
	     validPattern = false,
       validMin     = false,
       validMax	    = false;
   // Verwerking
   validPattern = regex.test(value);
   validMin     = value >= min;
   validMax	    = value <= max;
   isValid      = validPattern && validMin && validMax;
   // Wegschrijven resultaat naar HTML
   if (isValid) {
      writeMessage(true, fbVeld, OK);
   } else {
      if (!validMin) {
         writeMessage(false, fbVeld, NOTOK + " " + TEKLEIN);
      }	else {
         writeMessage(false, fbVeld, NOTOK + " " + TEGROOT);
      }
   }
   return isValid;
}

function isValidWithRegex(field, patternAttr) {
    // Declareren variabelen en inlezen gegevens HTML
   var isValid  = false,
       fbVeld  = field.next(CLASS_FEEDBACK),
	     value   = field.val(),
       pattern = field.attr(patternAttr);
	     regex   = new RegExp(pattern),
       title   = field.attr(TITLE);
  // Verwerking
  isValid = regex.test(value); 
  // Wegschrijven resultaat naar HTML
  if (isValid) {      
      writeMessage(true, fbVeld, OK);
   } else {
      writeMessage(false, fbVeld, NOTOK + " " + title);
   }
   return isValid; 
}

// hulpfuncties
function writeMessage(valid, field, message) {
  if (valid) {
    field.removeClass(INVALID).addClass(VALID).html(message);
  }
  else {
    field.removeClass(VALID).addClass(INVALID).html(message);
  }
}

      
$(document).ready(init);

// Constanten
const BLUR             = "blur",
      CLICK            = "click",
      POSTCODE         = "#postcode",
      GEBOORTEDATUM    = "#geboortedatum",
      SCHADEVRIJEJAREN = "#schadevrijejaren",
      KENTEKEN         = "#kenteken",
      INGANGSDATUM     = "#ingangsdatum",
      CLASS_FEEDBACK   = ".feedback",
	    PATTERN          = "pattern",
      CUSTOMPATTERN    = "data-pattern",
      REQUIRED         = "required",
      VALID            = "valid",
      INVALID          = "invalid",
	    OK               = "&#10003;",
      NOTOK            = "&#9747;",
      TITLE            = "title",
	    MIN              = "min",
      MAX              = "max",
      SUBMITBUTTON     = "input[type='submit']",
	    TEKLEIN          = "Alleen hele positieve getallen",  // Feedback bij te kleine waarde
      TEGROOT          = "Alleen getallen kleiner dan 100", // Feedback bij te groote waarde;
      MISSING          = "U bent dit item vergeten";

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
  $(SUBMITBUTTON).on(CLICK, isSubmittable);
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


function checkComplete(field) {
  var fbVeld  = field.next(CLASS_FEEDBACK),
      complete = !field.prop(REQUIRED) || field.val();
  if (!complete) {
    writeMessage(complete, fbVeld, NOTOK + " " + MISSING);
  }
  return complete;
}

function isSubmittable(event) {
  var postCodeCorrect = false,
      geboorteDatumCorrect = false,
      jarenCorrect = false,
      kentekenCorrect = false,
      ingangsdatumCorrect = false,
      complete = true;
  event.preventDefault();
  if (checkComplete($(POSTCODE))) {
    postCodeCorrect = isValidWithRegex($(POSTCODE), PATTERN);
  }
  else {
    complete = false;
  }
  if (checkComplete($(GEBOORTEDATUM))) {
    geboorteDatumCorrect = isValidWithRegex($(GEBOORTEDATUM), CUSTOMPATTERN);
  }
  else {
    complete = false;
  }
  if (checkComplete($(SCHADEVRIJEJAREN) )){
    jarenCorrect = isValidWithMinMax($(SCHADEVRIJEJAREN) );
  }
  else {
    complete = false;
  }
  if (checkComplete($(KENTEKEN))) {
    kentekenCorrect = isValidWithRegex($(KENTEKEN), PATTERN);
  }
  else {
    complete = false;
  }
  if (checkComplete($(INGANGSDATUM))) {
    ingansdatumCorrect = isValidWithRegex($(INGANGSDATUM), CUSTOMPATTERN);
  }
  else {
    complete = false;
  }
  return complete && postCodeCorrect && geboorteDatumCorrect && jarenCorrect && kentekenCorrect && ingangsdatumCorrect;
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
      
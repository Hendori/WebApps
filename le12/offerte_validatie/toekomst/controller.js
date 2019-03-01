$(document).ready(init);

// Constanten
const BLUR             = "blur",
      CLICK            = "click",
      INPUTS = "input:not([type=sumbit],[type=radio],[type=checkbox])",
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
      SUBMITBUTTON     = "input[type=submit]",
      SUBMIT           = "submit",
      COLOR            = "color",
      TYPE             = "type",
      TEXT             = "text",
      NUMBER           = "number",
	    TEKLEIN          = "Alleen hele positieve getallen",  // Feedback bij te kleine waarde
      TEGROOT          = "Alleen getallen kleiner dan 100", // Feedback bij te groote waarde;
      MISSING          = "U bent dit item vergeten";

// Binden van eventhandlers
function init() {
  $(INPUTS).on(BLUR, isValid);
  $(SUBMITBUTTON).on(CLICK, isSubmittable);
}

function isValid() {
   return validate($(this));
}

function isValidNumber(field) {
   var isvalid      = false,
       fbVeld       = field.next(CLASS_FEEDBACK),
	     value        = parseInt(field.val(),10),
       pattern      = field.attr(CUSTOMPATTERN),
	     regex        = new RegExp(pattern),
       title        = field.attr(TITLE),
	     min          = field.attr(MIN) || Number.MIN_VALUE,
	     max          = field.attr(MAX) || Number.MAX_VALUE,
	     validPattern = false,
       validMin     = false,
       validMax	    = false;
   validPattern = regex.test(value);
   validMin     = value >= min;
   validMax	    = value <= max;
   isValid      = validPattern && validMin && validMax;
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
  var veld = $(field),
      fbVeld  = veld.next(CLASS_FEEDBACK),
      complete = !veld.prop(REQUIRED) || veld.val();
  if (!complete) {
    writeMessage(complete, fbVeld, NOTOK + " " + MISSING);
  }
  return complete;
}

function isSubmittable(event) {
  var correct = true,
      complete = true;
  event.preventDefault();
  $(INPUTS).each(function(index, element) {
    if (checkComplete(element)) {
      if (!validate(element)) {
        correct = false;
      }
    }
    else {
      complete = false;
    }
  });
  return complete && correct;
}


// hulpfuncties
function validate(element) {
  var el = $(element);
  if (el.attr(TYPE) == TEXT) {
    return isValidWithRegex(el, PATTERN);
  }
  else if (el.attr(TYPE) == NUMBER) {
    return isValidNumber(el);
  }
  else if ((el.attr(TYPE) != SUBMIT) && (el.attr(TYPE) != COLOR)) {
		return isValidWithRegex(el, CUSTOMPATTERN);  
  } 
}

function writeMessage(valid, field, message) {
  if (valid) {
    field.removeClass(INVALID).addClass(VALID).html(message);
  }
  else {
    field.removeClass(VALID).addClass(INVALID).html(message);
  }
}

      
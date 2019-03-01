$(document).ready(init);

// Constanten
const BLUR             = "blur",
      CLICK            = "click",
      INPUTS = "input:not([type='sumbit'],[type='radio'],[type='checkbox'])",
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
      SUBMIT           = "submit",
      TEXT             = "text",
      NUMBER           = "number",
	    TEKLEIN          = "Alleen hele positieve getallen",  // Feedback bij te kleine waarde
      TEGROOT          = "Alleen getallen kleiner dan 100", // Feedback bij te groote waarde;
      MISSING          = "U bent dit item vergeten";

// Binden van eventhandlers
function init() {
  $(INPUTS).on(BLUR, isValid);
  $(SUBMITBUTTON).on(CLICK, submitIfValid);
}

function isValid() {
   return validate($(this));
}

function isValidNumber(field) {
   var info,
       isvalid      = false,
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
     info = new InputInfo(true, fbVeld, OK);
   } else {
      if (!validMin) {
        info = new InputInfo(false, fbVeld, NOTOK + " " + TEKLEIN);
      }	else {
        info = new InputInfo(false, fbVeld, NOTOK + " " + TEGROOT);
      }
   }
   return info;
}

function isValidWithRegex(field, patternAttr) {
    // Declareren variabelen en inlezen gegevens HTML
   var info,
       isValid  = false,
       fbVeld  = field.next(CLASS_FEEDBACK),
	     value   = field.val(),
       pattern = field.attr(patternAttr);
	     regex   = new RegExp(pattern),
       title   = field.attr(TITLE);
  // Verwerking
  isValid = regex.test(value); 
  // Wegschrijven resultaat naar HTML
  if (isValid) {     
    info = new InputInfo(true, fbVeld, OK);
   } else {
    info = new InputInfo(false, fbVeld, NOTOK + " " + title);
   }
   return info; 
}

function checkComplete(field) {
  var info,
      veld = $(field),
      fbVeld  = veld.next(CLASS_FEEDBACK),
      complete = !veld.prop(REQUIRED) || veld.val();
  if (!complete) {
    info = new InputInfo(false, fbVeld, NOTOK + " " + MISSING);
  }
  else {
    info = new InputInfo(true, fbVeld, OK);
  }
  return info;
}

function submitIfValid(event) {
  var correct = true,
      complete = true,
      info;
  event.preventDefault();
  $(INPUTS).each(function(index, element) {
    info = checkComplete(element);
    writeMessage(info.valid, info.fbField, info.message);
    if (info.valid) {
      info = validate(element);
      if (!info.valid) {
        writeMessage(info.valid, info.fbField, info.message);
        correct = false;
      }
    }
    else {
      complete = false;
    }
  });
  if  (complete && correct) {
    // verstuur Ajax-resuest
    console.log("Het formulier kan verstuurd worden.");
  }
  else {
    console.log("Het formulier kan nog niet worden opgestuurd.");
  }
}


// hulpfuncties
function validate(element) {
  var el = $(element);
  if (el.attr("type") == TEXT) {
    return isValidWithRegex(el, PATTERN);
  }
  else if (el.attr("type") == NUMBER) {
    return isValidNumber(el);
  }
  else if (el.attr("type") != SUBMIT) {
		return isValidWithRegex(el, CUSTOMPATTERN);  
  } 
}
function InputInfo(valid, fbField, message) {
  this.valid = valid;
  this.fbField = fbField;
  this.message = message;
}

function writeMessage(valid, field, message) {
  if (valid) {
    field.removeClass(INVALID).addClass(VALID).html(message);
  }
  else {
    field.removeClass(VALID).addClass(INVALID).html(message);
  }
}

      
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
 $(POSTCODE).on(BLUR, validatePostcode);
 $(GEBOORTEDATUM).on(BLUR, validateGeboorteDatum);
 $(SCHADEVRIJEJAREN).on(BLUR, validateSchadeVrijeJaren);
 $(KENTEKEN).on(BLUR, validateKenteken);
 $(INGANGSDATUM).on(BLUR, validateIngangsDatum);  
 $(SUBMITBUTTON).on(CLICK, isSubmittable);
}

// Eventhandlers
function validatePostcode() {
   // Declareren variabelen en inlezen gegevens HTML
   var isValid  = false,
       element = $(POSTCODE),
       fbVeld  = element.next(CLASS_FEEDBACK),
	     value   = element.val(),
       pattern = element.attr(PATTERN),
	     regex   = new RegExp(pattern),
       title   = element.attr(TITLE);
  // Verwerking
  isValid = regex.test(value); 
  // Wegschrijven resultaat naar HTML
  if (isValid) {      
      fbVeld.removeClass(INVALID).addClass(VALID);
	    fbVeld.html(OK);
   } else {
      fbVeld.removeClass(VALID).addClass(INVALID);
	    fbVeld.html(NOTOK + " " + title);
   }
   return isValid;
}

function validateGeboorteDatum() {
   // Declareren variabelen en inlezen gegevens HTML
   var isValid = false,
       element = $(GEBOORTEDATUM),
       fbVeld  = element.next(CLASS_FEEDBACK),
	     value   = element.val(),
       pattern = element.attr(CUSTOMPATTERN),
	     regex   = new RegExp(pattern),
       title   = element.attr(TITLE);
  // Verwerking
  isValid = regex.test(value); 
  // Wegschrijven resultaat naar HTML
  if (isValid) {      
      fbVeld.removeClass(INVALID).addClass(VALID);
	    fbVeld.html(OK);
   } else {
      fbVeld.removeClass(VALID).addClass(INVALID);
	    fbVeld.html(NOTOK + " " + title);
   }
   return isValid;
}

function validateSchadeVrijeJaren() {
   // Declareren variabelen en inlezen gegevens HTML
   var isvalid      = false,
       element      = $(SCHADEVRIJEJAREN),
       fbVeld       = element.next(CLASS_FEEDBACK),
	     value        = parseInt(element.val(),10),
       pattern      = element.attr(CUSTOMPATTERN),
	     regex        = new RegExp(pattern),
       title        = element.attr(TITLE),
	     min          = element.attr(MIN),
	     max          = element.attr(MAX),
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
      fbVeld.removeClass(INVALID).addClass(VALID);
	    fbVeld.html(OK);
   } else {
      fbVeld.removeClass(VALID).addClass(INVALID);
      if (!validMin) {
         fbVeld.html(NOTOK + " " + TEKLEIN);
      }	else {
         fbVeld.html(NOTOK + " " + TEGROOT);
      }
   }
   return isValid;
}

function validateKenteken() {
   // Declareren variabelen en inlezen gegevens HTML
   var isValid  = false,
       element = $(KENTEKEN),
       fbVeld  = element.next(CLASS_FEEDBACK),
	     value   = element.val(),
       pattern = element.attr(PATTERN),
	     regex   = new RegExp(pattern),
       title   = element.attr(TITLE);
  // Verwerking
  isValid = regex.test(value); 
  // Wegschrijven resultaat naar HTML
  if (isValid) {      
      fbVeld.removeClass(INVALID).addClass(VALID);
	    fbVeld.html(OK);
   } else {
      fbVeld.removeClass(VALID).addClass(INVALID);
	    fbVeld.html(NOTOK + " " + title);
   }
   return isValid;
}


function validateIngangsDatum(){
   // Declareren variabelen en inlezen gegevens HTML
   var isValid  = false,
       element = $(INGANGSDATUM),
       fbVeld  = element.next(CLASS_FEEDBACK),
	     value   = element.val(),
       pattern = element.attr(CUSTOMPATTERN),
	     regex   = new RegExp(pattern),
       title   = element.attr(TITLE);
  // Verwerking
  isValid = regex.test(value); 
  // Wegschrijven resultaat naar HTML
  if (isValid) {      
    fbVeld.removeClass(INVALID).addClass(VALID);
	  fbVeld.html(OK);
   } else {
      fbVeld.removeClass(VALID).addClass(INVALID);
	    fbVeld.html(NOTOK + " " + title);
   }
   return isValid;
}

function checkComplete(field) {
  var fbVeld  = field.next(CLASS_FEEDBACK),
      complete = !field.prop(REQUIRED) || field.val();
  if (!complete) {
    fbVeld.removeClass(VALID).addClass(INVALID);
    fbVeld.html(NOTOK + " " + MISSING);
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
    postCodeCorrect = validatePostcode();
  }
  else {
    complete = false;
  }
  if (checkComplete($(GEBOORTEDATUM))) {
    geboorteDatumCorrect = validategeboorteDatum();
  }
  else {
    complete = false;
  }
  if (checkComplete($(SCHADEVRIJEJAREN) )){
    jarenCorrect = validateSchadeVrijeJaren();
  }
  else {
    complete = false;
  }
  if (checkComplete($(KENTEKEN))) {
    kentekenCorrect = validateKenteken();
  }
  else {
    complete = false;
  }
  if (checkComplete($(INGANGSDATUM))) {
    ingansdatumCorrect = validateIngangsDatum();
  }
  else {
    complete = false;
  }
  return complete && postCodeCorrect && geboorteDatumCorrect && jarenCorrect && kentekenCorrect && ingangsdatumCorrect;
}

      
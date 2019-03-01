$(document).ready(init);

// Imports
var myValidator = validator;

// Constanten
const CHANGE           = "change",
      POSTCODE         = "#postcode",
      GEBOORTEDATUM    = "#geboortedatum",
      SCHADEVRIJEJAREN = "#schadevrijejaren",
      KENTEKEN         = "#kenteken",
      INGANGSDATUM     = "#ingangsdatum",
      CLASS_FEEDBACK   = ".feedback",
      VALID            = "valid",
      INVALID          = "invalid";

// Binden van eventhandlers
function init() {
 $(POSTCODE).on(CHANGE, validatePostcode);
 $(GEBOORTEDATUM).on(CHANGE, validateGeboorteDatum);
 $(SCHADEVRIJEJAREN).on(CHANGE, validateSchadeVrijeJaren);
 $(KENTEKEN).on(CHANGE, validateKenteken);
 $(INGANGSDATUM).on(CHANGE, validateIngangsDatum);
 $("#bereken").on("click", submit);  //************************
}

function submit(event) { //****************************
  // event.stopPropagation();
  // event.preventDefault();
}

// Eventhandlers
function validatePostcode(){
   return processEventAgainstRegexOnly($(POSTCODE));
}

function validateGeboorteDatum(){
   return processEventAgainstRegexOnly($(GEBOORTEDATUM));
}

// NB. #schadevrije jaren < (leeftijd - 18) op server testen!
function validateSchadeVrijeJaren(){
   var fbVeld = $(SCHADEVRIJEJAREN).next(CLASS_FEEDBACK),
       validRegexInfo = myValidator.isValidAgainstRegex($(SCHADEVRIJEJAREN)),
       validMinInfo = myValidator.isValidAgainstMin($(SCHADEVRIJEJAREN)),
       validMaxInfo = myValidator.isValidAgainstMax($(SCHADEVRIJEJAREN)),
       isValid = validRegexInfo.satisfy && validMinInfo.satisfy && validMaxInfo.satisfy;
   if (isValid){
      fbVeld.addClass(VALID);
      fbVeld.html(validMinInfo.feedback);
   } else {
      fbVeld.addClass(INVALID);
      if (!validRegexInfo.satisfy){
         fbVeld.html(validRegexInfo.feedback);
      } else if (!validMinInfo.satisfy) {
         fbVeld.html(validMinInfo.feedback);
      }	else {
         fbVeld.html(validMaxInfo.feedback);
      }
   }
   return isvalid;
}

function validateKenteken(){
  return processEventAgainstRegexOnly($(KENTEKEN));
}

function validateIngangsDatum(){
  return processEventAgainstRegexOnly($(INGANGSDATUM));
}

/*
 @function	processEventAgainstRegexOnly 
 @desc		1. Haalt het feedbackveld op
            2. Roept de validator op het inputelement aan,
            3. En schrijft zonodig de feedback in het feedbackveld.
 @param     {Object} inputElement - Het input-element met attributen value, pattern en tittle.
 @return    {Boolean} true bij valide waarde, false bij niet valide waarde
*/ 
function processEventAgainstRegexOnly(inputElement) {
   var fbVeld = inputElement.next(CLASS_FEEDBACK),
       validInfo = myValidator.isValidAgainstRegex(inputElement),
       isValid = validInfo.satisfy;
   if (isValid){
      fbVeld.addClass(VALID);
   } else {
      fbVeld.addClass(INVALID);
   }
   fbVeld.html(validInfo.feedback);
   return isValid;   
}


/************************************************
 * Voor refactoring
*************************************************/

/*
function validatePostcode(){
   var fbVeld    = $(POSTCODE).next(CLASS_FEEDBACK),
       validInfo = myValidator.isValidAgainstRegex($(POSTCODE)),
       isValid = validInfo.satisfy;
   if (isValid) {
      fbVeld.addClass(VALID);
   } else {
      fbVeld.addClass(INVALID);
   }
   fbVeld.html(validInfo.feedback);
   return isValid;
}

function validateGeboorteDatum(){
   var fbVeld = $(GEBOORTEDATUM).next(CLASS_FEEDBACK),
       validInfo = myValidator.isValidAgainstRegex($(GEBOORTEDATUM)),
       isValid = validInfo.satisfy;
   if (isValid){
      fbVeld.addClass(VALID);
   } else {
      fbVeld.addClass(INVALID);
   }
   fbVeld.html(validInfo.feedback);
   return isValid;   
}

// NB. #schadevrije jaren < (leeftijd - 18) op server testen!
function validateSchadeVrijeJaren(){
   var fbVeld = $(SCHADEVRIJEJAREN).next(CLASS_FEEDBACK),
       validRegexInfo = myValidator.isValidAgainstRegex($(SCHADEVRIJEJAREN)),
       validMinInfo = myValidator.isValidAgainstMin($(SCHADEVRIJEJAREN)),
       validMaxInfo = myValidator.isValidAgainstMax($(SCHADEVRIJEJAREN)),
       isValid = validRegexInfo.satisfy && validMinInfo.satisfy && validMaxInfo.satisfy;
   if (isValid){
      fbVeld.addClass(VALID);
      fbVeld.html(validMinInfo.feedback);
   } else {
      fbVeld.addClass(INVALID);
      if (!validRegexInfo.satisfy){
         fbVeld.html(validRegexInfo.feedback);
      } else if (!validMinInfo.satisfy) {
         fbVeld.html(validMinInfo.feedback);
      }	else {
         fbVeld.html(validMaxInfo.feedback);
      }
   }
}

function validateKenteken(){
   var fbVeld = $(KENTEKEN).next(CLASS_FEEDBACK),
       validInfo = myValidator.isValidAgainstRegex($(KENTEKEN)),
       isValid = validInfo.satisfy;
   if (isValid){
      fbVeld.addClass(VALID);
   } else {
      fbVeld.addClass(INVALID);
   }
   fbVeld.html(validInfo.feedback);
   return isValid;   
}

function validateIngangsDatum(){
   var fbVeld = $(INGANGSDATUM).next(CLASS_FEEDBACK),
       validInfo = myValidator.isValidAgainstRegex($(INGANGSDATUM)),
       isValid = validInfo.satisfy;
   if (isValid){
      fbVeld.addClass(VALID);
   } else {
      fbVeld.addClass(INVALID);
   }
   fbVeld.html(validInfo.feedback);
   return isValid;   
}

*/ 

      
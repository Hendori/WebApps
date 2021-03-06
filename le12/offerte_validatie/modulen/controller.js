var control = (function() {
  const BLUR             = "blur",
        CLICK            = "click",
        INPUTS           = "input:not([type='sumbit'],[type='radio'],[type='checkbox'])",
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
        TYPE             = "type",
        TEXT             = "text",
        NUMBER           = "number",
        MISSING          = "U bent dit item vergeten";
       
  var init = function() {
    $(INPUTS).on(BLUR, isValid);
    $(SUBMITBUTTON).on(CLICK, submitIfValid);    
  },
  isValid = function() {
     return validate($(this));
  },
  submitIfValid = function(event) {
    var correct = true,
        complete = true,
        message,
        info,
        veld,
        fbVeld;
    event.preventDefault();
    $(INPUTS).each(function(index, element) {
      veld = $(element);
      fbVeld = veld.next(CLASS_FEEDBACK);
      if (validator.checkComplete(veld.prop(REQUIRED), veld.val())) {
        if (!validate(veld)) {
          correct = false;
          writeMessage(false, fbVeld, invalidMessage(veld));
        }
        else {
          writeMessage(true, fbVeld, OK); 
        }
      }
      else {
        complete = false;
        writeMessage(false, fbVeld, NOTOK + " " + MISSING); 
      }
    });
    if  (complete && correct) {
      // verstuur Ajax-resuest
      console.log("Het formulier kan verstuurd worden.");
    }
    else {
      console.log("Het formulier kan nog niet worden opgestuurd.");
    }
  },
  invalidMessage = function(veld) {
    var message;
    if (veld.attr(TYPE) == NUMBER) {
      message = NOTOK + " "  + 
        validator.whatIsWrongWithNumber(el.attr(MIN) || Number.MIN_VALUE, el.attr(MAX) || Number.MAX_VALUE, veld.attr(TITLE), el.val());
    }
    else {
      message = NOTOK + " "  +  veld.attr(TITLE);          
    }
    return message;
  },
  validate = function(element) {
    var el = $(element),
        validateFunction;
    switch (el.attr(TYPE)) {
      case TEXT: {
        validateFunction = validator.isValidWithRegex(el.attr(PATTERN), el.val());
        break;
      }
      case NUMBER: {
        validateFunction =  validator.isValidNumber(el.attr(CUSTOMPATTERN), el.attr(MIN) || Number.MIN_VALUE, 
                            el.attr(MAX) || Number.MAX_VALUE, el.val());
        break;
      }
      default:  {
        validateFunction = validator.isValidWithRegex(el.attr(CUSTOMPATTERN), el.val());  
      }
    } 
    return validateFunction;
  },
  writeMessage = function(valid, field, message) {
    if (valid) {
      field.removeClass(INVALID).addClass(VALID).html(message);
    }
    else {
      field.removeClass(VALID).addClass(INVALID).html(message);
    }
  };
  return {
    init: init
  }
})();

$(document).ready(control.init);      
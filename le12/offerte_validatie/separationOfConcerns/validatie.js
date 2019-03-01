const TEKLEIN          = "Alleen hele positieve getallen",  // Feedback bij te kleine waarde
      TEGROOT          = "Alleen getallen kleiner dan 100"; // Feedback bij te groote waarde;

function isValidWithRegex(pattern, value) {
  var regex   = new RegExp(pattern);
  return regex.test(value); 
}

function isValidNumber(pattern, min, max, value) {
   var isvalid      = false,
	     regex        = new RegExp(pattern),
	     validPattern = false,
       validMin     = false,
       validMax	    = false,
       val = parseInt(value,10);
   validPattern = regex.test(val);
   validMin     = val >= min;
   validMax	    = val <= max;
   return  validPattern && validMin && validMax;
}

function whatIsWrongWithNumber(min, max, format, value) {
  var val = parseInt(value,10);
  if (val < min) {
    return TEKLEIN;
  }
  else if (val > max) {
    return TEGROOT;
  }
  return format;
}

function checkComplete(required, val) {
  return !required || val;
}


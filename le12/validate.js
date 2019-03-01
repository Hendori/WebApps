/**
*@function  isValidAgainstRegex 
*@desc		  Test de waarde van het attribuut value van (input-)element t.o.v. een reguliere expressie.
*           Als de test faalt, dan wordt de waarde van het attribuut tittle als feedback teruggegeven.		
*@param     {Object} element - Het input-element met attributen value, pattern en tittle.
*@return    {Object} {satisfy: boolean, feedback: string}		
*/ 

/**
*@function  isValidAgainstMin 
*@desc      Test de waarde van het attribuut value van (input-)element t.o.v. een minimale waarde.
*           Als de test faalt, dan wordt een foutboodschap teruggegeven.		
*@param     {Object} element - Het input-element met attribute value.
*@return    {Object} {satisfy: boolean, feedback: string}		
*/ 

/**
*@function	isValidAgainstMax 
*@desc		  Test de waarde van het attribuut value van (input-)element t.o.v. een maximale waarde.
*           Als de test faalt, dan wordt een foutboodschap teruggegeven.		
*@param     {Object} element - Het input-element met attribute value.
*@return    {Object} {satisfy: boolean, feedback: string}		
*/ 

/**
*@function  isInteger 
*@desc      geeft aan of x een integer is
*@param     {*} x  -  een parameter van een willekeurig type
*@return    {boolean}  -  true als x een integer is
*/


var validator = (function (){
        
	// Constanten 
    const PATTERN         = "pattern",
          MIN             = "min",
          MAX             = "max",	
          OK              = "&#10003;",                        // Vinkje
          TITLE           = "title",                           // Feedback bij regextest
          TEKLEIN         = "Alleen getallen groter dan ",  // Feedback bij te kleine waarde
          TEGROOT         = "Alleen getallen kleiner dan ", // Feedback bij te groote waarde
          BOOLEAN         = "boolean",
          GEENINTEGER     = "Alleen gehele getallen",
          GEENBOOLEAN     = "Expressie moet true of false zijn",
          NIETNUMERIEK    = "Moet een getal zijn",
        
        /* 
         constructor  Message 
         desc         Informatie-object als returnwaarde.
         param        {Boolean} satisfy - Geeft aan of de test wel/niet is geslaagd.
         param        {String} feedback - Informatie over de fout.		
        */		 
        Message = function(satisfy, feedback){
          this.satisfy = satisfy;
          this.feedback = feedback;
        },

        // Functies voor API
		
		isValidAgainstRegex = function (element){
          var pattern = element.attr(PATTERN),
              value   = element.val(),
              title   = element.attr(TITLE);
          return satisfyRegex(pattern, value, title);
        },
		isValidAgainstMin = function(element){
          var min   = element.attr(MIN),
              value = parseInt(element.val(), 10);
          return satisfyMin(min, value);
        },
        isValidAgainstMax = function(element){
          var max   = element.attr(MAX),
              value = parseInt(element.val(), 10);
          return satisfyMax(max, value);
        },
        // Private hulpfuncties
		
        /* 
         function satisfyRegex 
         desc     Test de waarde van value t.o.v een patroon.
                  Als de test niet slaagt, dan wordt de waarde van title als feedback teruggegeven. 
         param    {String} pattern - Een reguliere expressie.
         param    {String} value   - De te testen waarde.
         param    {String} title   - De feedback als de test faalt.
         return   {Object} {satisfy: boolean, feedback: string}				 
        */
		satisfyRegex = function (pattern, value, title){
          var regex = new RegExp(pattern);
          return (regex.test(value)) ? new Message(true, OK) : new Message(false, title);
        },
        /* 
         function satisfyMin
         desc     Test de waarde van value t.o.v een minimale waarde.
                  Als de test faalt, dan wordt een foutboodschap teruggegeven. 
         param    {Number} minValue - De minimale waarde.
         param    {Number} value    - De te testen waarde.
         return   {Object} {satisfy: boolean, feedback: string}				 
        */		
		satisfyMin = function(minValue, value){
          return (value >= minValue) ? new Message(true, OK) : new Message(false, TEKLEIN + minValue);
        },
        /* 
         function satisfyMax
         desc     Test de waarde van value t.o.v een maximale waarde.
                  Als de test faalt, dan wordt een foutboodschap teruggegeven. 
         param    {Number} maxValue - De maxiamle waarde.
         param    {Number} value    - De te testen waarde.
         return   {Object} {satisfy: boolean, feedback: string}				 
        */			
        satisfyMax = function(maxValue, value){
          return (value <= maxValue) ? new Message(true, OK) : new Message(false, TEGROOT+maxValue);
        },

  isInteger = function(el){
    var x = parseInt(el.val(), 10);
    return ($.isNumeric(x) &&  Math.floor(x) == x ) ? new Message(true, OK) : new Message(false,GEENINTEGER);
},

isBoolean = function (b){
  return (typeof b === BOOLEAN)  ? new Message(true, OK) : new Message(false,GEENBOOLEAN);
},

isNumeric = function(x){
  return ($.isNumeric(x))  ? new Message(true, OK) : new Message(false,NIETNUMERIEK);
} ;  
	// API

    return {        
       isValidAgainstRegex : isValidAgainstRegex,
       isValidAgainstMin   : isValidAgainstMin,
       isValidAgainstMax   : isValidAgainstMax,
       isInteger           : isInteger,
       isBoolean           : isBoolean,
       isNumeric           : isNumeric
     };
}());


		
		

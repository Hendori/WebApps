/*global intmodule,validator */

$(document).ready(init);
const 
      CLASS_FEEDBACK   = ".feedback",
      CHANGE           = "change",
      CLICK            = "click",
      G1               = "#g1",
      G2               = "#g2",
      GGD              = "#ggd",
      GGDRES           = "#ggdres",
      GGDTEXT          = "Ggd = ",
      INVALID          = "invalid",
      ID               = "id",
      KGV              = "#kgv",
      KGVRES           = "#kgvres",
      KGVTEXT          = "Kgv = ",
      MIN              = "min",
      MAX              = "max",
      OK               = "&#10003;", // Vinkje
      VALID            = "valid";
var myIntmodule = intmodule,
    myValidator = validator;      

/**
* Koppelt eventhandlers aan user interface elementen.
*/
function init() {
  $(G1).on(CHANGE,changed);
  $(G2).on(CHANGE,changed);
  $(KGV).on(CLICK,calc);
  $(GGD).on(CLICK,calc);
}

/**
* @function   changed
* @desc       Event handler changed. Deze handler is aan beide inputvelden (g1, g2) gekoppeld.
*             Indien g1 of g2 geen geldige waarde heeft wordt een foutboodschap in de userinterface getoond, anders een vinkje
*             Neveneffect: eventuele eerdere resultaten of foutboodschappen worden verwijderd
* @return     {boolean} geeft aan of g1 of g2 een geldige waarde heeft
*/
function changed(){
  clearRes();         // verwijdert eventueel resultaat van vorige berekening
  return check($(this));
}

/**
* @function   check
* @desc       Valideert een input element g1 of g2
* @desc       neveneffect: toont foutboodschap in bijbehorende span met class = feed
* @return     {boolean} -  true als g1 en g2 gehele getallen in de range zijn die in de html is aangegeven
*/
function check(element){
const
    fbVeld       = element.next(CLASS_FEEDBACK),
    value        = element.val();
var  
    valid        = false,
    isInt        = myValidator.isInteger(element),
    valMin, 
    valMax,
    melding;    
    if (isInt.satisfy){
      valMin  = myValidator.isValidAgainstMin(element);
      if (valMin.satisfy){
        valMax = myValidator.isValidAgainstMax(element);
        if(valMax.satisfy){
        valid  = true;
        fbVeld.removeClass(INVALID).addClass(VALID);
        fbVeld.html(OK);
        }
        else{
          melding = valMax.feedback;
          meld(melding,fbVeld);
        }
      }
      else{
          melding = valMin.feedback;
          meld(melding,fbVeld);
        }
    } 
    else {
      melding = isInt.feedback;
      meld(melding,fbVeld);
    }
   return valid;
}

/**
* @function   meld 
* @desc       toont een melding in het scherm
* @param      {String} melding  -  Tekst van melding
* @param      {jQuery-Object} fbVeld -  Referentie van plaats waar melding moet komen
*/
function meld(melding,fbVeld){
  fbVeld.removeClass(VALID).addClass(INVALID);
  fbVeld.html(melding);
}

/**
* @function calc
*@desc      Event handler voor het berekenen van ggd of kgv
* @return   {integer}  -  Berekent kgv of ggd van g1 en g2.
*/
function calc(){
  const gobj = getVals(),   
    el = "#"+$(this).attr(ID); // bron van event
    var 
       g1,
       g2; 
  if(check(gobj.g1) && check(gobj.g2)){  
    // gobj.g1 en gobj.g2 representeren twee geldige integers
    g1=parseInt(parseInt((gobj.g1).val(),10));
    g2=parseInt(parseInt((gobj.g2).val(),10));
    switch(el){
    case KGV:
      $(KGVRES).text(KGVTEXT+myIntmodule.kgv(g1,g2));
      break;
    case GGD:
      $(GGDRES).text(GGDTEXT+myIntmodule.ggd(g1,g2));
      break;
    }
  }  
}

/**
* @function getVals  
* @desc     Leest G1 en G2 en levert een object met g1 en g2 
* @return   {object}  -  een object met g1:G1 en g2:G2
*/

function getVals(){
  return {g1:$(G1),
          g2:$(G2)};
}

/**
* @function clearRes 
* @desc     Maakt het scherm van de uitkomsten van kgv en ggd weer schoon
*/
function clearRes(){
  $(GGDRES).text("");
  $(KGVRES).text("");
}


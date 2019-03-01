  /* @function handleQuestions
     @desc eventhandler die bekijkt welke vragen goed en fout beantwoord zijn en:
      - het vraagteken bij een goed beantwoorde vraag verandert in goed.png
      - het vraagteken bij een fout beantwoorde vraag verandert in fout.png
      - bij vijf goed beantwoorde vragen een alert met Uitstekend laat verschijnen
      - bij 0 of 1 goed beantwoorde vraag een alert met Dat was wel erg minimaal laat verschijnen
      - bij 3 of meer vragen goed het onderste vraagteken verandert in geslaagd.png
      - bij 2 of minder vragen goed het onderste vraagteken verandert in gezakt.png
  */
  
  /* @function placeQuestions
     &desc genereert de vragen in de HTML
  */

var control = (function() {
  
  function placeQuestions() {
    var questions = examen.createQuestions();
    questions.forEach(function(element) {
      $('#vragen').append(element).append(document.createElement('hr'));
    });
  }
  /* Function reviewUitslag(int, boolean) -> 0 of 1
     Goal: aan de hand van good het juiste image plaatsen bij de vraag met index,
           en een 1 teruggeven als het antwoord juist was (anders een nul)
     Parameters: 
      index: de index van de vraag
      good: een boolean (true als het antwoord juist is)
     Returns: 0 of 1
  */
  function reviewUitslag(index, good) {
    const uitslag = "#uitslag";
    var result = 0;
    if (good) {
        $(uitslag + index + " img").attr("src", "goed.png");
        result++;
      }
      else {
        $(uitslag + index + " img").attr("src", "fout.png");
      }
  }
  function handleAlerts(rightAnswers) {
    if (rightAnswers >= 3) {
      $("check").attr("src", "geslaagd.png");
    }
    else {
       $("check").attr("src", "gezakt.png");
    }
    if (rightAnswers == 5) {
      alert("Uitstekend!");
    }
    else if ((rightAnswers == 1)|| (rightAnswers == 0)) {
      alert("Dat was wel erg minimaal!");
    }
  }
  function handleQuestions() {
    var selects = $("select"),
        rightAnswers = 0,
        result = [];
    result = examen.getRightAnswers(selects);
    result.forEach(function(good, index)  {
      rightAnswers += reviewUitslag(index, good);
    });
    handleAlerts(rightAnswers);
  }
  /* API */
  
  return {
    handleQuestions: handleQuestions,
    placeQuestions : placeQuestions
  }
})();

$('document').ready(function() {
  control.placeQuestions();
  $("#check").on("click", control.handleQuestions);
});

var examen = (function() {
  function Question(vraag, antwoorden, juist, tip) {
    this.vraag = vraag;
    this.antwoorden = antwoorden;
    this.juist = juist;
    this.tip = tip;
  }
  const question0 = new Question('Welke kleur heeft gras?', 
    ['blauw', 'groen', 'rood', 'paars'], 
    'groen',
    'Het gras is altijd ... aan de andere kant van het hek.');
  const question1 = new Question('Waar krijgen we de meeste warmte van?', 
    ['venus', 'maan', 'zon', 'poolster'], 
    'zon', 
    'Lekker in de ... zitten.');
  const question2 = new Question('Een Roodborst is een?', 
    ['vogel', 'zoogdier', 'reptiel', 'vis'], 
    'vogel', 
    'Vissen kunnen zwemmen en ... kunnen vliegen.');
  const question3 = new Question('Soep eten doe je met een?',
    ['vork', 'mes', 'schroevedraaier', 'lepel'], 
    'lepel', 
    'Soep kun je opvorken of op...?');
  const question4 = new Question('Welk dier is rood met een pluimstaart?', 
    ['eekhoorn', 'konijn', 'olifant', 'paard'], 
    'eekhoorn', 
    'Je kunt er niet op rijden, hij heeft geen slurf, en geen wipstaartje.');
  const questions = [question0, question1, question2, question3, question4];
  
  /* @function: create(tag: string) -> jQuery element
     @desc: Creëer een element en breid het uit met jQuery
  */
  function create(tag) {
    return $(document.createElement(tag))
  }

  function createQuestions() {
    // hulpfuncties
    function getH2(index) {
      return create('h2').html('Vraag ' + index);
    }
    function getQuestionElement(question) {
      return create('div').addClass("vraag").html(question.vraag);
    }
    function getAnswer(choice) {
      return create('div').addClass("antwoord").append(choice);	
    }
    function getQuestionmark() {
      return create('img').attr('src', 'questionmark-klein.png');
    }
    function getCheckElement(index, questionmark) {
      return create('div').attr('id', 'uitslag' + index).addClass("uitslag").mouseover(examen.showTip).mouseout(examen.hideTip).append(questionmark);
    }
    function getTip(question) {
      return create('div').addClass('tip').hide().html(question.tip);	
    }
    function getQuestionArea(check, h2, questionElement, answer, tip) {
      return create('div').addClass('vraagArea').append(check).append(h2).append(questionElement).append(answer).append(tip);
    }
  
    var result = [];
    questions.forEach(function(question, index) {
      var h2 = getH2(index);
      var answers = question.antwoorden;
      var questionElement  = getQuestionElement(question);		
      var choice = create('select');
      getAnswers(question.antwoorden).forEach(function(antwoord) {
        choice.append(antwoord);
      });
      var answer = getAnswer(choice) ;		
      var image = getQuestionmark();
      var checkElement = getCheckElement(index, image) ;	    
      var tip = getTip(question);		
      var questionArea = 	getQuestionArea(checkElement, h2, questionElement , answer, tip);	
      result.push(questionArea);
    });
    return result;
  }

  /*
  Function: getAnswers(answers: array) -> array van option elementen
  Goal: Creëer een array van option-elementen voor de antwoorden
   */
  function getAnswers(answers) {
    var result = [];
    result.push(create('option').html('Weet niet'));
    answers.forEach(function(answer) {
      result.push(create('option').val(answer).html(answer));
    });
    return result;
  }

  /* Function: showTip
     Goal: eventhandler die tip laat verschijnen
  */
  function showTip() {
    $(this).parent().children().last().show();
  }

  /* Function: hideTip
     Goal: eventhandler die tip laat verdwijnen
  */
  function hideTip() {
    $(this).parent().children().last().hide();
  }

  /* Function: rightAnswers(selects: jQuery object) -> [boolean] 
     Goal: bekijkt bij elke vraag of het antwoord goed of fout is
    Parameters:
      selects     - een jQuery object met alle select-elementen met de antwoorden
    Returns: 
      een array met voor elke vraag een boolean voor het gegeven antwoord
  */
  function getRightAnswers(selects) {
    var result = [];
    selects.each(function(index)  {
      result.push($(this).val() == questions[index].juist);
    });
    return result;
  }

/*** API **/
  return {
    getRightAnswers: getRightAnswers,
    createQuestions: createQuestions,
    hideTip: hideTip,
    showTip: showTip
  }
})();
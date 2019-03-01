const QUESTION0 = new Question('Welke kleur heeft gras?', 
  ['blauw', 'groen', 'rood', 'paars'], 
  'groen',
  'Het gras is altijd ... aan de andere kant van het hek.'),
      QUESTION1 = new Question('Waar krijgen we de meeste warmte van?', 
  ['venus', 'maan', 'zon', 'poolster'], 
  'zon', 
  'Lekker in de ... zitten.'),
      QUESTION2 = new Question('Een roodborst is een?', 
  ['vogel', 'zoogdier', 'reptiel', 'vis'], 
  'vogel', 
  'Vissen kunnen zwemmen en ... kunnen vliegen.');
      QUESTION3 = new Question('Soep eten doe je met een?',
  ['vork', 'mes', 'schroevendraaier', 'lepel'], 
  'lepel', 
  'Soep kun je opvorken of op...?'),
      QUESTION4 = new Question('Welk dier is rood met een pluimstaart?', 
  ['eekhoorn', 'konijn', 'olifant', 'paard'], 
  'eekhoorn', 
  'Je kunt er niet op rijden, hij heeft geen slurf, en geen wipstaartje.'),
      QUESTIONS = [QUESTION0, QUESTION1, QUESTION2, QUESTION3, QUESTION4];
			
function Question(vraag, antwoorden, juist, tip) {
  this.vraag = vraag;
  this.antwoorden = antwoorden;
  this.juist = juist;
  this.tip = tip;
}

function getAnswers(answers) {
  var result = [];
  result.push(create("option").html("Weet niet"));
  answers.forEach(function(answer) {
    result.push(create('option').val(answer).html(answer));
  });
  return result;
}

function createQuestions() {
	var result = [];
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
	  return create('div').attr('id', 'uitslag' + index).addClass("uitslag").append(questionmark);
	}
	function getTip(question) {
	  return create('div').addClass('tip').hide().html(question.tip);	
	} 
	function getQuestionArea(check, h2, questionElement, answer, tip) {
	  return create('div').addClass('vraagArea').append(check).append(h2).append(questionElement).append(answer).append(tip);
	}
	
  QUESTIONS.forEach(function(question, index) {
    var h2 = getH2(index);
    var answers = question.antwoorden;
    var questionElement = getQuestionElement(question);
    var choice = create('select');
    getAnswers(question.antwoorden).forEach(function(antwoord) {
      choice.append(antwoord);
    });
    var answer = getAnswer(choice) ;
    var image = getQuestionmark();
    var checkElement = getCheckElement(index, image) ;
    var tip = getTip(question);
    var questionArea = getQuestionArea(checkElement, h2, 
                                       questionElement, answer, tip);
    $("#vragen").append(questionArea);
  });
  return result;
}

function create(tag) {
  return $(document.createElement(tag))
}

function showTip() {
  $(this).parent().children().last().show();
}
function hideTip() {
  $(this).parent().children().last().hide();
}
function getCheckElement(index, questionmark) {
  return create('div').attr('id', 'uitslag' + index).addClass("uitslag").mouseover(showTip).mouseout(hideTip).append(questionmark);
}

function handleQuestions() {
  var selects = $("select"),
      rightAnswers = 0,
      result = getRightAnswers(selects);
  result.forEach(function(good, index)  {
    rightAnswers += reviewUitslag(index, good);
  });
  handleAlerts(rightAnswers);
}

function handleAlerts(rightAnswers) {
  const CHECK = "#check",
        SRC = "src",
        GESLAAGD = "geslaagd.png",
        GEZAKT = "gezakt.png",
        GOED = "Uitstekend!",
        SLECHT = "Dat was wel erg minimaal!";
  if (rightAnswers >= 3) {
    $(CHECK).attr(SRC, GESLAAGD);
  }
  else {
     $(CHECK).attr(SRC, GEZAKT);
  }
  if (rightAnswers == 5) {
    alert(GOED);
  }
  else if ((rightAnswers == 1)|| (rightAnswers == 0)) {
    alert(SLECHT);
  }
}
function reviewUitslag(index, good) {
const UITSLAG = "#uitslag",
      IMG = " img",
      SRC = "src",
      GOED = "goed.png",
      FOUT = "fout.png";
  var result = 0;
  if (good) {
      $(UITSLAG + index + IMG).attr(SRC, GOED);
      result++;
    }
    else {
      $(UITSLAG + index + IMG).attr(SRC, FOUT);
    }
}

function getRightAnswers(selects) {
  var result = [];
  selects.each(function(index)  {
    result.push($(this).val() == questions[index].juist);
  });
  return result;
}

$(document).ready(function() {
  createQuestions();
  $("#check").on("click", handleQuestions);
});
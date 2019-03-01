var xs = (function () {
  var dagen = ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"],
      vandaag = new Date(),
      boodschap = "Vandaag, "+ dagen[vandaag.getDay()] + ", is een prachtige dag!";
  return boodschap;
}());

console.log(xs);
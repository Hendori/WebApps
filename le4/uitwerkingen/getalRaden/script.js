const GOED = "Goed geraden",
      TELAAG = "Sorry, dat was te laag",
      TEHOOG = "Sorry, dat was te hoog",
      NONUM = "Dat was geen getal",
      VRAAG = "Geeft een getal",
      GETAL = 5;
var getal = parseInt(prompt(VRAAG));
if (isNaN(getal)) {
  console.log(NONUM);
}
else if (getal === GETAL) {
  console.log(GOED);
}
else if (getal < GETAL) {
  console.log(TELAAG);
}
else {
  console.log(TEHOOG);
}
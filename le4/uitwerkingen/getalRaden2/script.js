const GOED = "Geraden",
      BIJNA = "Bijna goed",
      NIET = "Niet geraden",
      VRAAG = "Geeft een getal",
      GETAL = 5;
var getal = parseInt(prompt(VRAAG));
switch(getal) {
  case GETAL : {
    console.log(GOED);
    break;
  }
  case 4 :
  case 6 : {
    console.log(BIJNA);
    break;
  }
  default : {
    console.log(NIET);
  }
}
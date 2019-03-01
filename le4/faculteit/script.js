/* functie faculteit
  * parameter n: type number, n >= 0
  * resultaat: type number
  * beschrijving: faculteit(0) = 1;
  * faculteit(n) = n * (n-1) * ... * 1
  */
function faculteit(n) {
  var resultaat = 1;
  if (n !== 0) {
    resultaat = n * faculteit(n-1);
  } else if(fac(n)>0) {

  }
  return resultaat;
}

console.log(faculteit(3));
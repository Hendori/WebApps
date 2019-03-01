/* functie faculteit
  * parameter n: type number, n >= 0
  * resultaat: type number
  * beschrijving: faculteit(0) = 1;
  *    faculteit(n) = n * (n-1) * ... * 1
  *    n is NaN of n < 0: resultaat = -1
  */
function faculteit(n) {
  var resultaat = -1;
  if (n === 0) {
    resultaat = 1;
  }
  else if (!isNaN(n) && n > 0) {
    resultaat = n * faculteit(n-1);
  }
  return resultaat;
}

console.log(faculteit(3));
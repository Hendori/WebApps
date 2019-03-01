/* functie ggd
 * parameter m en n: type number, m en n > 0
 * resultaat: type number
 * beschrijving: als het grootste getal deelbaar is door het kleinste: het kleinste getal
 *               anders: de ggd van het kleinste getal en het verschilo tussen het grootste en het kleinste getal
 */
function ggd(m, n) {
  var grootste = max(m, n),
      kleinste = min(m, n),
      resultaat = kleinste;
  if (grootste % kleinste !== 0) {
    resultaat = ggd(kleinste, grootste - kleinste);
  }
  return resultaat; 
}
 
 
/* functie max
 * parameters m en n: type number
 * resultaat: type number
 * beschrijving: als m >= n wordt m teruggegeven
 *               anders n
 */
function max(m, n) {
  var resultaat = m;
  if (m < n) {
    resultaat = n;
  }
  return resultaat;
}

/* functie min
 * parameters m en n: type number
 * resultaat: type number
 * beschrijving: als m < n wordt m teruggegeven
 *               anders n
 */
function min(m, n) {
  var resultaat = m;
  if (m >= n) {
    resultaat = n;
  }
  return resultaat;
}

console.log(ggd(9, 6));
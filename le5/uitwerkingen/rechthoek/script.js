var rechthoek = {
  zijde1 : 3,
  zijde2 : 5
}

/** Functie: oppervlakte
 * Parameters: rechthoek: object met properties zijde1 en zijde2
 * Terugkeerwaarde: -1 als argument geen rechthoek is,
 *                 wanneer de zijden nul of negatief zijn of NaN
 *                 anders zijde1 * zijde2
 * Beschrijving: berekent de oppervlakte van een rechthoek
 */
function oppervlakte(r) {
  var result = -1;
  if (!isNaN(r.zijde1) && !isNaN(r.zijde2)) {
    if (r.zijde1 > 0 && r.zijde2 > 0) {
      result = r.zijde1 * r.zijde2;
    }
  }
  return result;
}

/* met exception (hernoemd naar oppervlakte2) */
function oppervlakte2(r) {
  if (isNaN(r.zijde1) || isNaN(r.zijde2) || r.zijde1 < 0 || r.zijde2 < 0) {
    throw new Error("verkeerde rechthoek");
  }
  return r.zijde1 * r.zijde2;
}
 
try {
  console.log(oppervlakte2({zijde1: 2, zijde2: 3}));
}
catch(err) {
  console.log(err.name + ": "+ err.message);
}
try {
  console.log(oppervlakte2({zijde1: -2, zijde2: 3}));
}
catch(err) {
  console.log(err.name + ": "+ err.message);
}
try {
  console.log(oppervlakte2({zijde1: "abc", zijde2: 3}));
}
catch(err) {
  console.log(err.name + ": "+ err.message);
}
try {
  console.log(oppervlakte2(3));
}
catch(err) {
  console.log(err.name + ": "+ err.message);
}

console.log(oppervlakte({zijde1: 2, zijde2: 3}));
console.log(oppervlakte({zijde1: -2, zijde2: 3}));
console.log(oppervlakte({zijde1: "abc", zijde2: 3}));
console.log(oppervlakte(3));
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

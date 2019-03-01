function kwadraten(numArray) {
  return numArray.map(function(el) {
      return Math.pow(el, 2);
  });
}

console.log(kwadraten([1, 2, 3]));
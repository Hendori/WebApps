// paragraaf 1.6 signatuur van functies

var xs = [5, 6, 7, 8];
var ys;

function isEven(x) {
    return x%2===0;
}
print(xs.map(isEven));

function doeiets(kwaak, kil, c) {
    return "" + kwaak + " " + kil + " " + c + "\n";
}
print(xs.map(doeiets));



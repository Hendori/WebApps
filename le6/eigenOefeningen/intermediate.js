//intermediate functions

(function doeiets() {
    print("intermediate functie");
}) ()


const LENGTH = 4;
const WIDTH = 3;
function oppervlakte(l, b) {
    return l * b;
}

function omtrek(l, b) {
    return 2 * l + 2 * b;
}

print("De oppervlakte is " + oppervlakte(LENGTH, WIDTH));
print("De omtrek is " + omtrek(LENGTH, WIDTH));

(function() {
    const LENGTH = 5;
    const WIDTH = 8;
    print("in de intermediate function");
    print("De oppervlakte is " + oppervlakte(LENGTH, WIDTH));
    print("De omtrek is " + omtrek(LENGTH, WIDTH));
}());

(function (wie, wanneer) {
    print("Ik ontmoet " + wie + " op " + wanneer);
}) ("JAN", new Date());


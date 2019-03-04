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


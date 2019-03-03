// Exceptions

var y = "a";
var x = y;
try {
    x();
}
catch(err) {
    print(err.name + ": " + err.message);
}
finally {
    print("Dit wordt altijd uitgevoerd");
}


function max(n, m) {
    var result = m;
    if (n>m) {
        result = n;
    }
    return result;
}

function ggd(n, m) {
    var grootste = m;
    var kleinste = n;
    var result = 0;
    if (isNaN(n)) {
        throw new TypeError("Eerste argument is geen nummer");
    }
    else if (isNaN(m)) {
        throw new TypeError("Tweede argument is geen nummer");
    }
    else {
        if (n === max(n, m)) {
            grootste = n;
            kleinste = m;
        }
        if (grootste % kleinste === 0) {
            result = kleinste;
        }
        else {
            print("doing ggd of " + kleinste + " en " + (grootste % kleinste));
            result = ggd(kleinste, grootste % kleinste);
        }
    }
    return result;
}


print(ggd(1001, 39));

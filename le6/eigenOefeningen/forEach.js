var xs = [1, 2, 3, 4, 5];

function sum(numArray) {
    var som = 0;
    numArray.forEach(function(x) {
        som = som + x;
    });
    return som;
}

print(sum(xs));

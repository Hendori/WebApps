var rijen = [];
rijen.push([0, 0, 1, 0, 1]);
rijen.push([1, 0, 1, 1, 1]);
rijen.push([1, 1, 1, 0, 0]);
rijen.push([1, 1, 1, 0, 0]);
rijen.push([0, 1, 0, 0, 0]);

var kolommen = [];
rijen.forEach(function() {
    kolommen.push([]);
});

rijen.forEach(function(rij, rijIndex) {
    rij.forEach(function(e1, kolomIndex) {
        kolommen[kolomIndex] [rijIndex] = e1;
    });
});

function show(a) {
    print(a);
}

kolommen.forEach(function(element) {
    show(element);
});

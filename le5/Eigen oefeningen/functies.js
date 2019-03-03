var groterDan;
function bigger(n, m) {
    return n >= m;
}

groterDan = bigger;
print(groterDan(5, 3));

var kleinerDan = function (n, m) {
    return (n<=m);
}

print(kleinerDan(5,3));

function som(a, b, c) {
    return (a + b + (c || 0));
}

print(som(1,2));
print(som(1,2,3));



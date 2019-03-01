var rij = [1,4,3,2,6];

function kleinerDan(m, n) {
    return (m-n);
}

function groterDan(m, n) {
    return (n-m);
}


print(rij.sort(kleinerDan));
print(rij.sort(groterDan));
print(rij);

var rij2 = rij.join(rij);
print(rij2);

function laatZien(woord, positie) {
    print("op positie " + (positie + 1) + " staat het woord " + woord);
}

function laatZien(woord) {
    print("Hier staat het woord " + woord);
}

menu = ["kwak", "kwek", "kwik"];
menu.forEach(function(e) {
    laatZien(e, menu.indexOf(e));
});

var menu3 = [];
menu3.push(menu[0]);
menu3.push(menu[1]);
menu3.push(menu[2]);
print(menu3);

var menuS = "kwik, kwek, kwak";
menua = menuS.split(", ");
menua.forEach(function (woord) {
    laatZien(woord);
});

print(menua)

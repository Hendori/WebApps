var fac=[1];
function fact(getal) {
    if (getal <= 1) {
        return 1;
    }
    else if (fac[getal] > 0) {
        return fac[getal];
    }
    else {
        fac[getal] = getal * fact(getal-1);
        return fac[getal];
    }
}

for (var i = 30; i>=-1; i--) {
    console.log("" + fact(i) + " " + i);
}

var lijst = [1, 3, 5, 7, 9, 11, 13, 15];
var allenOnderTien = lijst.every(onderTien);
var sommigeOnderTien = lijst.some(onderTien);

function onderTien(e) {
    return e < 10;
}

print("allenOndertien is " + allenOnderTien);
print("sommigeOnderTien is " + sommigeOnderTien);
    

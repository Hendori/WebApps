//opgave 6.1

function twee(k) {
    return function(n) {
        return k*n;
    }
}

print(typeof(twee));
print(typeof(twee()));

var twa = twee(5);
print(twa(4));
print(twee(5)(4));

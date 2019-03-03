var a = 10, b = 20;

function scopeRegels() {
    var b = 1;
    var c = 2;

    print(a);
    print("b in scopreRegels is " + b);
    print(c);
}

scopeRegels();
print(a);
print("b buiten scopeRegels is " + b);


var isEven;

function isDeelbaarDoor(getal) {
    return function(n) {
        return n%getal === 0;
    }
}

isEven = isDeelbaarDoor(2);

print('is even van 3 ' + (isEven(3)));
print('is even van 4 ' + (isEven(4)));

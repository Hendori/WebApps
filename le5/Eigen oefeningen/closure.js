// javascript probeersels bij Closure (3.7)


var tellerA, tellerB;

function geefTeller() {
    var teller = 0;
    return function () {
        teller++;
        print(teller);
    }
}

tellerA = geefTeller();
tellerB = geefTeller();

tellerA();
tellerA();

tellerB();
tellerB();
tellerB();
tellerB();
tellerB();


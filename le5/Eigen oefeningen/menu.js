var menu = ["kippensoep", "tomatensoep", "uiensoep"];
print(menu);

//opgave 5.1 Ga uit van de variabele menu, Hoe zou je de variabele menu2 kunnen creeeren die als waarde een andere array heeft met dezelfde elementen als menu
var menu2 = [];
menu.forEach(function(e) {
    menu2.push(e);
    print(e);
});

if (menu === menu2) {
    print("beide menu's zijn hetzelfde");
}
else {
    print("beide menu's zijn niet hetzelfde");
}


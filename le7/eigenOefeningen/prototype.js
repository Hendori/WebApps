function Cat(name, colour, size) {
    this.name = name;
    this.colour = colour;
    this.size = size;
}

Cat.prototype.species = "kat";

var cat1 = new Cat("Tiger", "black", 0.5);
var cat2 = new Cat("Sammy", "red", 0.5);

print(cat1.species);
print(cat2.species);

cat2.species = "Tijger";
print(cat2.species);

print(cat2.colour);
delete cat2.colour;
print(cat2.colour);

Cat.prototype.toString = function() {
    return this.name + ", " + this.colour + ", " + this.size;
}

print(cat1.toString());

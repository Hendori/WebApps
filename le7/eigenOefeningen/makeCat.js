function makeCat(name, colour, size) {
    var cat = {}
    cat.name = name;
    cat.colour = colour;
    cat.size = size;
    cat.toString = function() {
        return "the cat's name is " + this.name + ", colour is " + this.colour + " and his size is " + this.size;
    }
    return cat;
}

var cat1 = makeCat("Hendri", "black", 30);
var cat2 = makeCat("Constance", "white", 34);
var cats = [cat1, cat2];
cats.forEach(printCatString);

function printCatString(cat) {
    print(cat.toString());
}


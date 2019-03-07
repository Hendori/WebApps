var catNames = ["Tiger", "Puss", "Smokey", "Misty", "Kitty"]

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

function makeCats(names) {
    var result = [];
    names.forEach(function(name) {
        result.push(makeCat(name, "zwart", 10));
    })
    return result;
}

var cats = makeCats(catNames);
cats.forEach(function(cat) {
    print("cat name is " + cat.name + " and his color is " + cat.colour);
});

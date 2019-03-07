var catNames = ["Tiger", "Puss", "Smokey", "Misty", "Kitty", "Oscar", "Missy", "Max", "Simba", "Sammy"];

function Cat(name, colour, size) {
	this.name = name;
	this.colour = colour;
	this.size = size;
}

function makeCats(names) {
	var result = [];
	// in te vullen
    names.forEach(function(name) {
        result.push(new Cat(name, "black", 0.5));
    });
	return result;
}

Cat.prototype.makeSound = function() {
    print("Miauw");
}

var cats = makeCats(catNames);

cats.forEach(function(cat) {
	print(cat.name + " is: " + cat.colour);
    cat.makeSound();
});

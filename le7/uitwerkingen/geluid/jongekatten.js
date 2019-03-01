var catNames = ["Tiger", "Puss", "Smokey", "Misty", "Kitty", "Oscar", "Missy", "Max", "Simba", "Sammy"];

function Cat(name, colour, size) {
	this.name = name;
	this.colour = colour;
	this.size = size;
}

Cat.prototype.makeSound = function() {
	console.log("Miauw");
}

function makeCats(names) {
	return names.map(function(name) {
		return new Cat(name, " black", 0.5);
	});
}

var cats = makeCats(catNames);
cats.forEach(function(cat) {
	console.log(cat.name + " is: " + cat.colour);
	cat.makeSound();
});
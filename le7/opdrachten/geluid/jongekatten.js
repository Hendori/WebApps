var catNames = ["Tiger", "Puss", "Smokey", "Misty", "Kitty", "Oscar", "Missy", "Max", "Simba", "Sammy"];

function Cat(name, colour, size) {
	this.name = name;
	this.colour = colour;
	this.size = size;
}

function makeCats(names) {
	var result = [];
	// in te vullen
	return result;
}

var cats = makeCats(catNames);
cats.forEach(function(cat) {
	console.log(cat.name + " is: " + cat.colour);
});
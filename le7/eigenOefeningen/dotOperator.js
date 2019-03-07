var cat = {
    name: "Sammy",
    colour: "black",
    size: 30,
    toString: function() {
        return "A cat with name: " + this.name + " colour " + this.colour + " and size " + this.size;
    }
}

var propertyname = "size";
print(cat[propertyname]);

print(cat.toString());


//forEach met strings

var strings = ["aap", "noot", "mies"];

function showStrings(value, index) {
    print("index is " + index + " en value is " + value);
}

strings.forEach(showStrings);

function Rechthoek(x, y) {
    this.x = x;
    this.y = y;
    this.oppervlakte = function() {
        return x*y;
    }
}


var rechthoek1 = new Rechthoek(5,6);
print (rechthoek1.oppervlakte());

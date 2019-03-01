let f = [];

function factorial(n) { //This is used to make the factorial numbers. This uses memoization so you don't do many unnecessary calculations
    if (n == 0)
        return 1;
    if (f[n] > 0)
        return f[n];
    f[n] = factorial(n - 1) * n; //memoization
    return f[n];
};

function ncr(n, r) { //This will make the individual numbers for the pascal triangle
    return factorial(n) / (factorial(r) * factorial(n-r));
};

function pascalLine(n) { //This creates the line for n.
    let returnString = "";
    for (let i = 0; i<=n; i++)
        returnString += ncr(n,i) + " ";
    return returnString;
};

function pascal(n) {
    for (let i = 0; i<=n; i++) {
        console.log(pascalLine(i));
    }
}

pascal(10);

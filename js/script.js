welcome();

console.log(variable);

function welcome() {
    console.log("Hello World!");
}

var variable = 5;

const power = (a, b = 1) => a**b;

const factorial = (number) => {
    if (!number) {
        return 1;
    }

    return factorial(number - 1) * number;
};
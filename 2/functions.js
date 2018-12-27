function nope () {}  // = undefined

function nope () {
   return;
}  // = undefined

function sum (x, y) {
    return x + y;
}

sum.length; // = 2

function params () {
    return arguments;
}

params();  // = []
params("a", 3, true);  // = ["a", 3, true]

function moreParams (...myArgs) {
    return myArgs;
}

moreParams();  // = []
moreParams("a", 3, true);  // = ["a", 3, true]
moreParams(["a", 3, true]);  // = ["a", 3, true]

let numbers = [2, 4, 5];
moreParams(...numbers); // == moreParams(2, 4, 5);

function namedParams ( [first, second, ...rest]) {
   console.log(first + second);
   console.log(rest)
}

namedParams(3, 5, 2, 4); // 8, [2, 4]
moreParams("a", 3, true);  // = ["a", 3, true]

// object params

// high order functions
// input or output of functions
function operate(a, b, op) {
    if (a > 0 && b >0) {
        return op(a, b) ;
    }

    return -1;
}

operate(2, 40, add); // = 42

function sum(...theArgs) {
    console.log(theArgs)
    return theArgs.reduce((previous, current) => {
        return previous + current;
    });
}

console.log(sum(1, 2, 3));
// expected output: 6

console.log(sum(1, 2, 3, 4));

function list() {
    console.log(arguments);
    return Array.prototype.slice.call(arguments);
}

var list1 = list(1, 2, 3); // [1, 2, 3]
console.log(list1);


console.log([].slice.call({
    0: 1,
    1: 2
}));

var unboundSlice = Array.prototype.slice;
var slice = Function.prototype.call.bind(unboundSlice);

function list2(arguments) {
    return slice(arguments);
}

var list2 = list2({
    0: 1,
    1: 2
}); // [1, 2, 3]
console.log(list2);
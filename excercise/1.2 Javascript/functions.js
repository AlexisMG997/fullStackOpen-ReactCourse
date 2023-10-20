const sum = (p1, p2) => {
    console.log(p1);
    console.log(p2);
    return p1 + p2;
}

const result = sum(10, 5);
console.log(result);            // Prints 15

const square = p => {
    console.log(p);
    return p * p;
}
console.log(square(3));         // Prints 9 

const squareShort = p => p * p;
console.log(squareShort(2));    // Prints 4

const t = [1, 2, 3];
const tSquared = t.map(p => console.log(p * p)); // Prints [1, 4, 9]

function product(a, b){
    return a * b
}
const newResult = product(2,3); // Result is now 6;

const average = function(a, b){
    return (a + b) / 2
}
const averageResult = average(2, 2);
console.log(averageResult);     // averageResult should be 2

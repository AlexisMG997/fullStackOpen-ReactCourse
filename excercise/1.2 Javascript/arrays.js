const t = [1, -1, 3];

const t2 = t.concat(5);

console.log(t);          // Prints 1, -1, 3
console.log(t2);         // Prints 1, -1, 3, 5

t.push(5);

console.log(t.length);   // Prints 4
console.log(t[1]);       // Prints -1

//ForEach loop
t.forEach(value =>{
    console.log(value);  // Numbers 1, -1, 3, 5 are printed, each on its own line
})

const m1 = t.map(value => value * 2);
console.log(m1);         // Prints 2, -2, 6, 10 

const m2 = t.map(value => '<li>' + value + '</li>');
console.log(m2);         // Prints <li>1</li>... 

const [first, second, ...rest] = t;

console.log(first, second); // Prints 1, -1
console.log(rest);          // Prints 3, 5
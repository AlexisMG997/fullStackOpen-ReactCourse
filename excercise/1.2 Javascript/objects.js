const object1 = {
    name: 'Arto Hellas',
    age: 35,
    educaation: 'PhD',
}

const object2 = {
    name: 'Full Stack web application development',
    level: 'intermediate studies',
    size: 5,
}

const object3 = {
    name: {
        first: 'Dan',
        last: 'Abramov',
    },
    grades: [2, 3, 5, 3],
    departmnent: 'Stanford University'
}

console.log(object1.name);       // Arto Helias
const fieldName = 'age';
console.log(object1[fieldName]); // 35

object1.Address = 'Helsinki';
object1['secret number'] = 12345;
console.log(object1);


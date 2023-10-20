// Creating object with methods
const arto = {
    name: "Arto Hellas",
    age: 35,
    education: "PhD",
    greet: function() {
        console.log("Hello, my name is " + this.name)
    },
    doAddition: function(a, b){
        console.log(a + b)
    },
}
arto.greet();

// Assigning methods to object properties after created
arto.growOlder = function(){
    this.age += 1;
}
console.log(arto.age);
arto.growOlder();
console.log(arto.age);

// Storing a method reference inside variable 
arto.doAddition(1,4);
const referenceToAddition = arto.doAddition;
referenceToAddition(10, 10);

// Storing a method that uses this keyword inside a variable (undefined)
const referenceToGreet = arto.greet;
referenceToGreet();

setTimeout(arto.greet, 1000);
setTimeout(arto.greet.bind(arto), 1000);
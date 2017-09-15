// Strings

let firstName = 'John';
let lastName = 'Doe';
const yearOfBirth = 1990;

function calcAge(year) {
    return 2017 - year;
}

//ES5

console.log('To jest ' + firstName + ' ' + lastName + '. ' + 'Ma ' + calcAge(yearOfBirth) + ' lat.');

//ES6

console.log(`To jest ${firstName} ${lastName}. Ma ${calcAge(yearOfBirth)} lat.`);

let n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.startsWith('j'));

console.log(n.endsWith('oe'));
console.log(n.includes(' D'));

console.log(`${lastName} `.repeat(10));



// Arrow functions

const years = [1990, 1980, 1970, 1960];

// ES5
var agesEs5 = years.map(function(element) {
    return 2017 - element; 
});

console.log('ES5');
console.log(agesEs5);


// ES6
let agesEs6 = years.map(el => 2017 - el);
console.log('Es6');
console.log(agesEs6);


agesEs6 = years.map((el, index) => `Age element ${index +1}: ${2017 - el}`);
console.log(agesEs6);


agesEs6 = years.map((el, index) => {
   
    const now = new Date().getFullYear();
    const age = now - el;
    
    return `Age element ${index + 1}: ${age}`;
    
});
console.log(agesEs6);
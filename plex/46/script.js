// var john = {
// 	name: 'John',
// 	yearOfBirth: 1970,
// 	job: 'teacher'
// };

// var Person = function(name, yearOfBirth, job) {
// 	this.name = name;
// 	this.yearOfBirth = yearOfBirth;
// 	this.job = job;
// }

// Person.prototype.calculateAge = function(){
// 	console.log(2016-this.yearOfBirth); 
// };

// var mike = new Person('Mike', 1991, 'nauczyciel');
// var adam = new Person('Adam', 1980, 'mechanik');

// mike.calculateAge();
// adam.calculateAge();





// funkcje jako argument funkcji

// var years = [1990,1965,1937,2006,1998,1979];

// function arrayCalc(arr, fn) {
// 	var arrRes = [];
// 	for (var i = 0; i < arr.length; i++) {
// 			arrRes.push(fn(arr[i]));
// 		}
// 	return arrRes;
// }

// function calculateAge(element) {
// 	return 2016 - element;
// }

// function isFullAges(el) {
// 	return el >= 18;
// }

// function maxHeartRate(elem) {
// 	if(elem >= 18 && elem <= 81) {
// 		return Math.round(206.9 - (0.67 * elem));
// 	} else {
// 		return -1;
// 	}
// }

// var lata = arrayCalc(years, calculateAge);
// console.log(lata);

// var pelnoletni = arrayCalc(lata, isFullAges);
// console.log(pelnoletni);

// var serce = arrayCalc(lata, maxHeartRate);
// console.log(serce);


// funkcja zwrazająca funkcję

var imie = 'Ola';
var praca = 'designer';

function interviewQ(job) {
	if (job==='designer') {
		return function(name) {
			console.log(name + ' What is UX?');
		}
	} else if (job === 'teacher') {
		return function(name) {
			console.log(name + ' Co to jest math?');
		}		
	} else {
		return function(name) {
			console.log('Coś tam');
		}
	}
}


var Question = interviewQ(praca);
Question(imie);













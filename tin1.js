


// a) Funkcja prezentująca działanie pętli for (1 pkt)
function demoFor(){
	let counter = 0;
	for (let i = 0; i < 10; i++) {
		console.log(counter++);
	}
}

// b) Funkcja prezentująca działanie pętli while (1 pkt)
function demoWhile() {
	let counter = 0;
	while (counter < 10) {
		console.log(counter++);
	}
}

// c) Funkcja prezentująca działanie pętli for ... in (1 pkt)

function demoLoopIn() {
	let array = ['a', 'b', 'c'];
	
	for (let i in array) {
		console.log(i);
	}
}

// d) Funkcja prezentująca działanie pętli for ... of (1 pkt)

function demoLoopOf() {
	let array = ['a', 'b', 'c'];
	
	for (let i of array) {
		console.log(i);
	}
}


// e) Funkcja prezentująca działanie instrukcji if (1 pkt)

function demoIfPies(input) {
	if (input === "pies") {
		return true;
	}
	return false;
}

// f) Funkcja przyjmująca dwa (lub więcej) parametry, sprawdzająca czy są one liczbami lub mogą być skonwertowane na wartości liczbowe i wykonująca na nich obliczenia lub (jeśli to niemożliwe) zwracająca błąd (1 pkt)

function addTwoNumbers(a, b) {
	if (isNaN(a) || isNaN(b)) {
		
		return throw new Error("Not a Number");	
	}
	return a+b;
}

// g) Funkcja przyjmująca zmienną liczbę parametrów i robiącą z nimi coś (1 pkt)

function takeThemAll(input) {
	let result = '';
	for (let arg of arguments) {
		result += arg;
	}
	
	console.log(result);
}

// h) Funkcja przyjmująca jako jeden z parametrów funkcję (i wykorzystująca ją w jakiś sposób) + 2 przykładowe funkcje, które można wykorzystać jako jej parametry (1 pkt)
function doubleNumber(a) {
	if (isNaN(a)) {
		throw new Error("Not a number!");
	}
	return a*2;
}

function addFive(a) {
	if (isNaN(a)) {
		throw new Error("Not a number!");
	}
	return a+5;
}

function transform(input, fun) {
	return fun(input);
}

function isTriangle(a, b, c, fun) {
	return fun(a, b, c);
}

function checkTriangleMethod(a, b, c) {
	return c*c === b*b + a*a;
}

function checkTriangleMethodBad(a, b, c) {
	return c === a+b;
}

// i) Przykład wykorzystania funkcji konstruktora do tworzenia obiektów – obiekty powinny mieć przynajmniej 3 pola różnych typów i 1 metodę robiącą coś (1 pkt)


function Box(size, name, isPies) {
	if (isNaN(size)) {
		throw new Error('Wrong type of size');
	}
	this.size = size;
	if (typeof name !== "string") {
		throw new Error('Wrong type of name');
	}
	this.name = name;

	if (typeof isPies !== "boolean") {
		throw new Error('Wrong type of isPies');
	}

	this.isPies = isPies;
	
	this.describe = function(){
		console.log("descriptions: " + name + ' ' + size + ' ' + isPies);
	}
}

let myBox = new Box(10, "kot", true);

// j) Przykład wykorzystania klas do tworzenia obiektów – obiekty powinny mieć przynajmniej 3 pola różnych typów, konstruktor i 1 metodę robiącą coś (1 pkt)

class Shape {
	constructor(name, size, date) {
		this.name = name;
		this.size = size;
		this.date = date;
		
		this.describe = function(){
			console.log("description " + name + " " + size + " " + date);
		}
	}
}

let myShape = new Shape('kwadrat', 10, Date());
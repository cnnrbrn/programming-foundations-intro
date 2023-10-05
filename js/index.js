const books = [
	{
		id: 123,
		"book-title": "Great book",
		inStock: false,
		genres: ["adventure", "sci-fi"],
		publisher: {
			name: "Some publisher",
			address: "Somewhere",
		},
	},
	{
		id: 124,
		"book-title": "Another Great Book",
		inStock: true,
		genres: ["fantasy", "adventure"],
		publisher: {
			address: "Another Place",
		},
	},
	{
		id: 125,
		"book-title": "Yet Another Great Book",
		inStock: true,
		genres: ["mystery"],
	},
	{
		id: 126,
		"book-title": "Fourth Great Book",
		inStock: false,
		genres: ["romance"],
		publisher: {
			address: "Fourth Place",
		},
	},
	{
		id: 127,
		"book-title": "Fifth Great Book",
		inStock: true,
		genres: ["history"],
		publisher: {
			name: "Fifth Publisher",
			address: "Fifth Place",
		},
	},
	{
		id: 128,
		"book-title": "Sixth Great Book",
		inStock: false,
		genres: ["science"],
		publisher: {
			name: "Sixth Publisher",
			address: "Sixth Place",
		},
	},
	{
		id: 129,
		"book-title": "Seventh Great Book",
		inStock: true,
		genres: ["biography"],
		publisher: {
			name: "Seventh Publisher",
			address: "Seventh Place",
		},
	},
	{
		id: 130,
		"book-title": "Eighth Great Book",
		inStock: false,
		genres: ["philosophy"],
		publisher: {
			name: "Eighth Publisher",
			address: "Eighth Place",
		},
	},
	{
		id: 131,
		"book-title": "Ninth Great Book",
		inStock: true,
		genres: ["psychology"],
		publisher: {
			name: "Ninth Publisher",
			address: "Ninth Place",
		},
	},
];

const container = document.querySelector("#container");

const menuButton = document.querySelector("#menu-button");

menuButton.addEventListener("click", toggleMenu);

// console.log(typeof menuButton.addEventListener);

function toggleMenu(event) {
	console.log(event.target.innerText);

	const button = event.target;

	if (button.innerText === "Open") {
		button.innerText = "Close";
	} else {
		button.innerText = "Open";
	}

	const menu = document.querySelector("#menu");
	menu.classList.toggle("open");

	// menu.style.display = "block";
	// menu.style.backgroundColor = "green";

	// console.log(menu.style);
}

// parameters = way to pass values in to a function
// return = the way to return a value from a function

// function addNumbers(numberOne, numberTwo) {
// 	// console.log(numberOne + numberTwo);

// 	const total = numberOne + numberTwo;
// 	console.log(total);
// 	return total;
// }

// const sum = addNumbers(2, 3);

// // console.log("sum", sum);

function functionDemo(functionToDemo) {
	// console.log(typeof functionToDemo);
	functionToDemo();
}

function doSomething() {
	console.log("I AM HERE");
}

functionDemo(doSomething);

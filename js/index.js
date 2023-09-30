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

books.forEach(function (book) {
	console.log("foreach", book);

	if (book.inStock === false) {
		const card = document.createElement("div");
		card.classList.add("card");

		const heading = document.createElement("h2");
		heading.innerText = book["book-title"];
		card.append(heading);

		const genres = document.createElement("p");
		genres.innerText = book.genres;
		card.append(genres);

		const publisherName = document.createElement("p");
		publisherName.innerText = book.publisher?.name ?? "No name available";
		card.append(publisherName);

		container.append(card);
	}
});

// for (let i = 0; i < books.length; i++) {
// 	console.log(i);

// 	// if (i === 3) {
// 	// 	break;
// 	// }

// 	if (books[i].inStock === false) {
// 		continue;
// 	}

// 	const card = document.createElement("div");
// 	card.classList.add("card");

// 	const heading = document.createElement("h2");
// 	heading.innerText = books[i].title;
// 	card.append(heading);

// 	const genres = document.createElement("p");
// 	genres.innerText = books[i].genres;
// 	card.append(genres);

// 	const publisherName = document.createElement("p");
// 	publisherName.innerText = books[i].publisher?.name ?? "No name available";
// 	card.append(publisherName);

// 	container.append(card);
// }

// const heading = document.createElement("h1");
// heading.innerText = book.title;
// container.append(heading);

// const genres = document.createElement("p");
// genres.innerText = book.genres;
// container.append(genres);

// const inStock = document.createElement("p");
// inStock.innerText = "In stock: ";
// const inStockValue = document.createElement("b");
// inStockValue.innerText = book.inStock;
// inStock.append(inStockValue);
// container.append(inStock);

// const publisherName = document.createElement("p");
// publisherName.innerText = book.publisher.name;
// container.append(publisherName);

const container = document.querySelector("#container");

const book = {
	id: 123,
	title: "Great book",
	inStock: false,
	genres: ["adventure", "sci-fi"],
	publisher: {
		name: "Some publisher",
		address: "Somewhere",
	},
};

console.log(book.publisher.name);

const heading = document.createElement("h1");
heading.innerText = book.title;
container.append(heading);

const genres = document.createElement("p");
genres.innerText = book.genres;
container.append(genres);

const inStock = document.createElement("p");
inStock.innerText = "In stock: ";
const inStockValue = document.createElement("b");
inStockValue.innerText = book.inStock;
inStock.append(inStockValue);
container.append(inStock);

const publisherName = document.createElement("p");
publisherName.innerText = book.publisher.name;
container.append(publisherName);

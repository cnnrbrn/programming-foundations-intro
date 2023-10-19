import { books } from "./data/books.js";

const container = document.querySelector("#container");
const button = document.querySelector("#button");

button.addEventListener("click", displayBooks);

function displayBooks() {
	books.forEach(function (book) {
		const heading = document.createElement("h2");
		heading.innerText = book["book-title"];
		container.append(heading);
	});
}

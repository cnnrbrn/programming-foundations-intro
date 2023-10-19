import { getBooks } from "./api/getBooks.js";

const container = document.querySelector("#container");

async function displayBookTitles() {
	try {
		const books = await getBooks();

		container.innerHTML = "";

		books.forEach(function (book) {
			const heading = document.createElement("h3");
			heading.innerText = book.title;
			container.append(heading);
		});
	} catch (error) {
		console.error(error);
		container.innerHTML = '<div class="error">There was an error fetching the books</div>';
	}
}

displayBookTitles();

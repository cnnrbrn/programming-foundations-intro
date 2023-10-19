import { url } from "../constants/api.js";

export async function getBooks() {
	const response = await fetch(url);
	const results = await response.json();
	return results;
}

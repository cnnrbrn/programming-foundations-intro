// let age = 7;
// console.log(age);
// age++;
// console.log(age);
const container = document.querySelector("#container");

// for (let i = 1; i <= 10; i++) {
// 	console.log(i);
// 	const paragraph = document.createElement("p");
// 	paragraph.innerText = i;
// 	container.append(paragraph);
// }

const colours = ["red", "blue", "green", "yellow", "pink", "black"];
console.log(colours);
// var colour = colours[4];
const arrayLength = colours.length;
console.log("arrayLength", arrayLength);

for (let i = 0; i < colours.length; i++) {
	// console.log(i);

	console.log(i % 2);

	// console.log(colours[i]);

	const paragraph = document.createElement("p");
	paragraph.innerText = colours[i];

	if (i % 2 === 1) {
		paragraph.classList.add("colour");
	}

	container.append(paragraph);
}

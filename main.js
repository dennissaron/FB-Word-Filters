// var comments = document.querySelectorAll('li');
// for (index in comments) {
// 	try {
// 		if (comments[index].outerHTML.includes("Comment by")) {
// 			console.log(comments[index]);
// 		}
// 	} catch (issue) {
// 		//?false positive
// 	}
// }
var divs = document.querySelectorAll('div');
for (index in divs) {
	try {
		if (divs[index].getAttribute("aria-label") == "Comment") {
			// console.log(divs[index]);
			divs[index].addEventListener("click", () => {
				console.log("clicked element");
			});
		}
	} catch (issue) {
		//?false positive
	}
}

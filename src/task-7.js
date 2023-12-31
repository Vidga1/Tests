/* Задача-7 "Работа с DOM" */
export function initializePage() {
	const submitButton = document.getElementById("submitButton");
	const inputField = document.getElementById("inputField");
  
	submitButton.style.display = "none";
  
	inputField.addEventListener("input", () => {
		if (inputField.value !== "") {
			submitButton.style.display = "block";
		} else {
			submitButton.style.display = "none";
		}
	});
  
	submitButton.addEventListener("click", () => {
		const newParagraph = document.createElement("p");
		newParagraph.textContent = inputField.value;
		document.body.appendChild(newParagraph);
  
		const paragraphs = document.getElementsByTagName("p");
		if (paragraphs.length > 5) {
			paragraphs[0].remove();
		}
  
		inputField.value = "";
		submitButton.style.display = "none";
	});
}
//

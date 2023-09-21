export function initializePage() {
    var submitButton = document.getElementById("submitButton");
    var inputField = document.getElementById("inputField");
  
    submitButton.style.display = "none";
  
    inputField.addEventListener("input", function() {
      if (inputField.value !== "") {
        submitButton.style.display = "block";
      } else {
        submitButton.style.display = "none";
      }
    });
  
    submitButton.addEventListener("click", function() {
      var newParagraph = document.createElement("p");
      newParagraph.textContent = inputField.value;
      document.body.appendChild(newParagraph);
  
      var paragraphs = document.getElementsByTagName("p");
      if (paragraphs.length > 5) {
        paragraphs[0].remove();
      }
  
      inputField.value = "";
      submitButton.style.display = "none";
    });
  }
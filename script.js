const form = document.querySelector("form");
let computerNumber = document.querySelector("#computerNum");

let result = document.querySelector(".output");
let resultDiv = document.querySelector(".result");
const submitButton = document.querySelector("#submit");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userNumber = +document.querySelector("#userNum").value;

  let randomNumber = Math.floor(Math.random() * (10 - 1 + 1) + 1);

  if (userNumber !== "") {
    computerNumber.innerHTML = `Computer Guess: ${randomNumber}`;
    computerNumber.setAttribute("style", "display:block !important");

    if (userNumber === randomNumber) {
      const textNode = document.createTextNode(" Congratulations! User guess Correctly!");
      result.appendChild(textNode);
      result.setAttribute("style", "color:green !important");
      resultDiv.setAttribute("style", "display:block !important");
    
    } else if (userNumber > 10 || userNumber < 1) {
      computerNumber.setAttribute("style", "display:none !important");

      const textNode = document.createTextNode(" Not a valid guess ! Please guess b/w 1-10.");
      result.appendChild(textNode);
      result.setAttribute("style", "color:red !important");
      resultDiv.setAttribute("style", "display:block !important");
    
    } else {
      const textNode = document.createTextNode(" Try Again! User guess wrong.");
      result.appendChild(textNode);
      result.setAttribute("style", "color:red !important");
      resultDiv.setAttribute("style", "display:block !important");
    }

    submitButton.disabled = true;

  } else {
    alert("Please guess any number");
  }
});

form.addEventListener("reset", () => {
  submitButton.disabled = false;
  result.innerText = "";
  computerNumber.innerHTML = "";
  computerNumber.setAttribute("style", "display:none !important");
  resultDiv.setAttribute("style", "display:none !important");
});

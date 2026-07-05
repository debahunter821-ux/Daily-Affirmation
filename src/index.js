function generateAffirmation(event) {
  event.preventDefault();

  let affirmationOutput = document.querySelector("#affirmation-output");
  affirmationOutput.innerHTML =
    "I can be soft in my heart and firm in my boundaries.";
}

let affirmationFormElement = document.querySelector("#affirmation-form");
affirmationFormElement.addEventListener("submit", generateAffirmation);

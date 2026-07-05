function generateAffirmation(event) {
  event.preventDefault();

  let affirmationOutput = document.querySelector("#affirmation-output");

  new Typewriter("#affirmation-output", {
    strings: "I can be soft in my heart and firm in my boundaries.",
    autoStart: true,
    cursor: null,
    delay: 25,
  });

  
}

let affirmationFormElement = document.querySelector("#affirmation-form");
affirmationFormElement.addEventListener("submit", generateAffirmation);

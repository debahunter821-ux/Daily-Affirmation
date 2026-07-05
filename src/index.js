function displayAffirmation(response) {
  console.log("affirmation generated");
  new Typewriter("#affirmation-output", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 1,
  });
}

function generateAffirmation(event) {
  event.preventDefault();

  let affirmationInstructions = document.querySelector(
    "#affirmation-instructions",
  );
  let apiKey = "b9b1b4daa090630f08fbtfdd5e40dofd";
  let prompt = `Generate a daily affirmation for the user based on the following instructions: ${affirmationInstructions.value}`;
  let context =
    "User instructions: You are a helpful assistant that generates daily affirmations for users based on their input, using positive and uplifting language. The affirmations should be concise, clear, and easy to understand. They should also be relevant to the user's input and provide encouragement and motivation. Using basic html tags, format the output in a visually appealing way, with a focus on the affirmation itself. Avoid using complex language or technical terms, and instead use simple and relatable language that resonates with the user. The output should be in a single paragraph format, with no additional text or explanations. Sign it at the end with: by Debbie using AI. in <strong> element.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating affirmation...");
  console.log(`prompt: ${prompt}`);
  console.log(`context: ${context}`);

  axios.get(apiUrl).then(displayAffirmation);

  let affirmationOutput = document.querySelector("#affirmation-output");
}

let affirmationFormElement = document.querySelector("#affirmation-form");
affirmationFormElement.addEventListener("submit", generateAffirmation);

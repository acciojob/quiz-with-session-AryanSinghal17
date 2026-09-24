const questions = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "What is the highest mountain in the world?",
    choices: ["Everest", "Kilimanjaro", "Denali", "Matterhorn"],
    answer: "Everest",
  },
  {
    question: "What is the largest country by area?",
    choices: ["Russia", "China", "Canada", "United States"],
    answer: "Russia",
  },
  {
    question: "Which is the largest planet in our solar system?",
    choices: ["Earth", "Jupiter", "Mars"],
    answer: "Jupiter",
  },
  {
    question: "What is the capital of Canada?",
    choices: ["Toronto", "Montreal", "Vancouver", "Ottawa"],
    answer: "Ottawa",
  },
];

const questionsElement = document.getElementById("questions");
const submitButton = document.getElementById("submit");
const scoreElement = document.getElementById("score");

let userAnswers =
  JSON.parse(sessionStorage.getItem("userAnswers")) ||
  new Array(questions.length).fill("");

// Show saved score on page load
const savedScore = localStorage.getItem("score");
scoreElement.textContent =
  savedScore === null
    ? "Your Score is 0 out of 5"
    : `Your Score is ${savedScore} out of 5`;

function renderQuestions() {
  questionsElement.innerHTML = "";

  questions.forEach((question, i) => {
    const questionElement = document.createElement("div");

    const questionText = document.createElement("h3");
    questionText.textContent = question.question;
    questionElement.appendChild(questionText);

    question.choices.forEach((choice) => {
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = `question-${i}`;
      radio.value = choice;

      if (userAnswers[i] === choice) {
        radio.checked = true;
      }

      radio.addEventListener("change", () => {
        userAnswers[i] = choice;
        sessionStorage.setItem(
          "userAnswers",
          JSON.stringify(userAnswers)
        );
      });

      const label = document.createElement("label");
      label.appendChild(radio);
      label.append(` ${choice}`);

      questionElement.appendChild(label);
      questionElement.appendChild(document.createElement("br"));
    });

    questionsElement.appendChild(questionElement);
  });
}

submitButton.addEventListener("click", () => {
  let score = 0;

  questions.forEach((question, i) => {
    if (userAnswers[i] === question.answer) {
      score++;
    }
  });

  localStorage.setItem("score", score);

  scoreElement.textContent = `Your Score is ${score} out of 5`;
});

renderQuestions();
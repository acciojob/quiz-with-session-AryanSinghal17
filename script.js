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

let userAnswers = new Array(questions.length).fill("");




// Display the quiz questions and choices
function renderQuestions() {
  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];

    const questionElement = document.createElement("div");

    const questionText = document.createElement("h3");
    questionText.textContent = question.question;

    questionElement.appendChild(questionText);

    for (let j = 0; j < question.choices.length; j++) {
      const choice = question.choices[j];

      const choiceElement = document.createElement("input");
      choiceElement.type = "radio";
      choiceElement.name = `question-${i}`;
      choiceElement.value = choice;

      if (userAnswers[i] === choice) {
        choiceElement.checked = true;
      }

      // Save selected answer
      choiceElement.addEventListener("change", () => {
        userAnswers[i] = choice;
      });

      const label = document.createElement("label");
      label.appendChild(choiceElement);
      label.append(` ${choice}`);

      questionElement.appendChild(label);
      questionElement.appendChild(document.createElement("br"));
    }

    questionsElement.appendChild(questionElement);
  }
}



submitButton.addEventListener("click", () => {
  let score = 0;

  for (let i = 0; i < questions.length; i++) {
    if (userAnswers[i] === questions[i].answer) {
      score++;
    }
  }
	localStorage.setItem("score", score);
  scoreElement.textContent = `Your Score is ${score}/${questions.length} out of 5`;
});
scoreElement.textContent = `Your Score is  ${localStorage.getItem(score)} out of 5`;
renderQuestions();
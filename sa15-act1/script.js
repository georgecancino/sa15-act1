const quizQuestions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin"],
        correctAnswer: "Paris"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Jupiter", "Mars"],
        correctAnswer: "Jupiter"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Jane Austen", "Charles Dickens"],
        correctAnswer: "William Shakespeare"
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "CO2", "NaCl"],
        correctAnswer: "H2O"
    },
    {
        question: "What year did the Titanic sink?",
        options: ["1912", "1901", "1923"],
        correctAnswer: "1912"
    }
];

let currentQuestionIndex = 0;

const questionContainer = document.getElementById("question");
const feedbackContainer = document.getElementById("feedback");
const feedbackText = document.getElementById("feedback-text");
const submitButton = document.getElementById("submit");
const nextButton = document.getElementById("next");

function displayQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    questionContainer.innerHTML = `
        <h2>Question ${currentQuestionIndex + 1}</h2>
        <p>${currentQuestion.question}</p>
        <ul>
            ${currentQuestion.options.map(option => `
                <li>
                    <input type="radio" name="answer" value="${option}">
                    <label>${option}</label>
                </li>
            `).join("")}
        </ul>
    `;
}

function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) {
        feedbackText.textContent = "Please select an answer.";
        return;
    }

    if (selectedAnswer.value === quizQuestions[currentQuestionIndex].correctAnswer) {
        feedbackText.textContent = "Correct!";
    } else {
        feedbackText.textContent = `Incorrect! The correct answer is: ${quizQuestions[currentQuestionIndex].correctAnswer}`;
    }

    feedbackContainer.style.display = "block";
}

submitButton.addEventListener("click", checkAnswer);

nextButton.addEventListener("click", () => {
    feedbackContainer.style.display = "none";

    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        displayQuestion();
    } else {
        questionContainer.innerHTML = "<h2>Quiz Complete!</h2>";
        nextButton.style.display = "none";
        submitButton.style.display = "none";
    }
});

displayQuestion();

// Define the questions and answers
const questions = [
    {
        question: "Which element has the highest ionization energy?",
        answers: [
            { text: "Fluorine", correct: false },
            { text: "Helium", correct: true },
            { text: "Oxygen", correct: false },
            { text: "Nitrogen", correct: false },
        ]
    },
    {
        question: "Who is credited with the discovery of the neutron?",
        answers: [
            { text: "Marie Curie", correct: false },
            { text: "Ernest Rutherford", correct: false },
            { text: "James Chadwick", correct: true },
            { text: "Niels Bohr", correct: false },
        ]
    },
    {
        question: "In which year did the Battle of Hastings take place?",
        answers: [
            { text: "1066", correct: true },
            { text: "1215", correct: false },
            { text: "1492", correct: false },
            { text: "793", correct: false },
        ]
    },
    {
        question: "What is the name of the first artificial Earth satellite launched by the Soviet Union?",
        answers: [
            { text: "Sputnik 1", correct: true },
            { text: "Luna 1", correct: false },
            { text: "Vostok 1", correct: false },
            { text: "Soyuz 1", correct: false },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

// Start the quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.textContent = "Next";
    nextButton.disabled = true;  // Disable next button initially
    showQuestion();
}

// Show the current question and answers
function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;

    // Clear any existing answers
    answerButtons.innerHTML = "";

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.classList.add("btn");
        button.textContent = answer.text;
        answerButtons.appendChild(button);
        button.addEventListener("click", () => selectAnswer(button, answer.correct));
    });
}

// Handle the user's answer selection
function selectAnswer(button, isCorrect) {
    // Disable all answer buttons once an answer is selected
    const allButtons = document.querySelectorAll(".btn");
    allButtons.forEach(btn => btn.disabled = true);

    // Apply the correct/incorrect styles
    if (isCorrect) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("incorrect");
    }

    // Show the "Next" button
    nextButton.disabled = false;
}

// Show the next question or results
function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
        nextButton.disabled = true;  // Disable the next button until an answer is selected
    } else {
        showResults();
    }
}

// Show the results when the quiz ends
function showResults() {
    questionElement.textContent = `Your score: ${score} / ${questions.length}`;
    answerButtons.innerHTML = "";
    nextButton.textContent = "Restart Quiz";
    nextButton.disabled = false;
}

// Add event listener for the "Next" button
nextButton.addEventListener("click", nextQuestion);

// Start the quiz on page load
startQuiz();

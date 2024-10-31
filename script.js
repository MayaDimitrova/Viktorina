const questions = [
    {
        question: "Кое от следните не е свойство на водата?",
        answers: ["Тя е прозрачна.", "Тя гори.", "Тя тече."],
        correct: 1
    },
    {
        question: "Какво е вещество?",
        answers: ["Всичко, което заема пространство.", "Само въздухът.", "Само нещата, които можем да пипнем."],
        correct: 0
    },
    {
        question: "Коя е основната разлика между твърдите и течните вещества?",
        answers: ["Твърдите имат постоянна форма.", "Течностите не могат да заемат пространство.", "Твърдите вещества могат да променят формата си без натиск."],
        correct: 0
    },
    {
        question: "Какво се случва с водата при замръзване?",
        answers: ["Тя се разширява.", "Тя се изпарява.", "Тя става невидима."],
        correct: 0
    },
    {
        question: "Кое от следните е пример за газ?",
        answers: ["Въздухът.", "Камъкът.", "Водата в река."],
        correct: 0
    },
    {
        question: "Как можем да превърнем водата в пара?",
        answers: ["Да я изстудим.", "Да я нагреем.", "Да я разтопим."],
        correct: 1
    },
    {
        question: "Кое твърдение е вярно за металите?",
        answers: ["Те са винаги течни.", "Те са добри проводници на топлина.", "Те не могат да се разтягат."],
        correct: 1
    },
    {
        question: "Кое от следните вещества може да се стопи при нагряване?",
        answers: ["Дървото.", "Ледът.", "Камъкът."],
        correct: 1
    },
    {
        question: "Кое свойство е характерно за дървото?",
        answers: ["То е твърдо и може да гори.", "То е прозрачно и тече.", "То се разширява при нагряване като метал."],
        correct: 0
    },
    {
        question: "Как можем да определим дали едно вещество е твърдо?",
        answers: ["То може да се разлива.", "То има постоянна форма.", "То заема формата на съда."],
        correct: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
    const questionElement = document.getElementById("question");
    const answerButtons = document.querySelectorAll(".answer");
    const nextButton = document.getElementById("next-btn");

    questionElement.textContent = questions[currentQuestionIndex].question;
    answerButtons.forEach((button, index) => {
        button.textContent = questions[currentQuestionIndex].answers[index];
        button.style.backgroundColor = "#e0e0e0";
        button.disabled = false;
    });

    nextButton.classList.add("hidden");
}

function checkAnswer(selectedIndex) {
    const answerButtons = document.querySelectorAll(".answer");
    const correctIndex = questions[currentQuestionIndex].correct;
    const nextButton = document.getElementById("next-btn");

    if (selectedIndex === correctIndex) {
        answerButtons[selectedIndex].style.backgroundColor = "green";
        if (!answerButtons[selectedIndex].classList.contains("answered")) {
            score++;
            document.getElementById("score").textContent = score;
        }
    } else {
        answerButtons[selectedIndex].style.backgroundColor = "red";
    }

    answerButtons.forEach(button => button.disabled = true);
    nextButton.classList.remove("hidden");

    if (currentQuestionIndex === questions.length - 1) {
        nextButton.textContent = "Край";
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const quizContainer = document.querySelector(".quiz-container");
    const resultElement = document.getElementById("result");
    quizContainer.classList.add("hidden");

    let message = `Вие събрахте общо ${score} точки. `;
    let emoji = "";

    if (score >= 9) {
        message += "Справихте се отлично!";
        emoji = "😊";
    } else if (score >= 7) {
        message += "Справихте се много добре!";
        emoji = "😊";
    } else if (score >= 5) {
        message += "Справихте се добре!";
        emoji = "😊";
    } else {
        message += "Прочети още по темата и играй отново!";
        emoji = "😞";
    }

    resultElement.textContent = message + " " + emoji;
    resultElement.classList.remove("hidden");
}

document.addEventListener("DOMContentLoaded", showQuestion);

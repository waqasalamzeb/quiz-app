const quizData = [
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Lisbon",
        correct: "c",
        category: "English"
    },
    {
        question: "What is 2 + 2?",
        a: "3",
        b: "4",
        c: "5",
        d: "6",
        correct: "b",
        category: "Maths"
    },
    {
        question: "What does CPU stand for?",
        a: "Central Process Unit",
        b: "Central Processing Unit",
        c: "Computer Personal Unit",
        d: "Central Processor Unit",
        correct: "b",
        category: "Computer"
    },
    {
        question: "Which is the largest planet in our solar system?",
        a: "Earth",
        b: "Mars",
        c: "Jupiter",
        d: "Saturn",
        correct: "c",
        category: "Science"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        a: "William Wordsworth",
        b: "William Shakespeare",
        c: "Charles Dickens",
        d: "Mark Twain",
        correct: "b",
        category: "English"
    },
    {
        question: "What is 3 * 3?",
        a: "6",
        b: "9",
        c: "12",
        d: "15",
        correct: "b",
        category: "Maths"
    },
    {
        question: "What does RAM stand for?",
        a: "Random Access Memory",
        b: "Read Access Memory",
        c: "Run Access Memory",
        d: "Read And More",
        correct: "a",
        category: "Computer"
    },
    {
        question: "What is the square root of 16?",
        a: "2",
        b: "3",
        c: "4",
        d: "5",
        correct: "c",
        category: "Maths"
    },
    {
        question: "Which language is primarily used for web development?",
        a: "Python",
        b: "Java",
        c: "JavaScript",
        d: "C++",
        correct: "c",
        category: "Computer"
    },
    {
        question: "What is the synonym of 'happy'?",
        a: "Sad",
        b: "Elated",
        c: "Angry",
        d: "Indifferent",
        correct: "b",
        category: "English"
    }
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const restartBtn = document.getElementById('restart');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Restart</button>
            `;
        }
    }
});

restartBtn.addEventListener('click', () => {
    currentQuiz = 0;
    score = 0;
    loadQuiz();
    restartBtn.style.display = 'none';
    submitBtn.style.display = 'inline-block';
});

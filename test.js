let currentLang = localStorage.getItem('lang') || 'zh';

const questions = [
    {
        question: "Considering your own natural rhythm, at what time would you prefer to wake up?",
        options: [
            "5:00 AM-6:30 AM",
            "6:30 AM-7:45 AM",
            "7:45 AM-9:45 AM",
            "9:45 AM-11:00 AM",
            "11:00 AM-12:00 PM"
        ],
        scores: [5, 4, 3, 2, 1]
    },
    {
        question: "Considering your own natural rhythm, at what time would you prefer to go to bed?",
        options: [
            "8:00 PM-9:00 PM",
            "9:00 PM-10:15 PM",
            "10:15 PM-12:30 AM",
            "12:30 AM-1:45 AM",
            "1:45 AM-3:00 AM"
        ],
        scores: [5, 4, 3, 2, 1]
    },
    {
        question: "If you have to get up at a specific time in the morning, do you need an alarm clock?",
        options: [
            "Not at all",
            "Rarely",
            "Often",
            "Always"
        ],
        scores: [4, 3, 2, 1]
    },
    {
        question: "How easy do you find it to get up in the morning under normal circumstances?",
        options: [
            "Very easy",
            "Fairly easy",
            "Fairly difficult",
            "Very difficult"
        ],
        scores: [4, 3, 2, 1]
    },
    {
        question: "How alert do you feel during the first half hour after waking up?",
        options: [
            "Very alert",
            "Fairly alert",
            "Fairly sluggish",
            "Very sluggish"
        ],
        scores: [4, 3, 2, 1]
    },
    {
        question: "How is your appetite during the first half hour after waking up?",
        options: [
            "Very good",
            "Fairly good",
            "Fairly poor",
            "Very poor"
        ],
        scores: [4, 3, 2, 1]
    },
    {
        question: "How tired do you feel during the first half hour after waking up?",
        options: [
            "Not at all tired",
            "Slightly tired",
            "Fairly tired",
            "Very tired"
        ],
        scores: [4, 3, 2, 1]
    },
    {
        question: "When you have no commitments the next day, what time do you go to bed compared to your usual bedtime?",
        options: [
            "Seldom or never later",
            "Less than 1 hour later",
            "1-2 hours later",
            "More than 2 hours later"
        ],
        scores: [4, 3, 2, 1]
    },
    {
        question: "You have decided to do physical exercise. A friend suggests doing this for one hour twice a week at 7:00-8:00 AM. How do you think you would perform?",
        options: [
            "Would be in good form",
            "Would be in reasonable form",
            "Would find it difficult",
            "Would find it very difficult"
        ],
        scores: [4, 3, 2, 1]
    },
    {
        question: "At what time in the evening do you feel tired and need sleep?",
        options: [
            "8:00 PM-9:00 PM",
            "9:00 PM-10:15 PM",
            "10:15 PM-12:45 AM",
            "12:45 AM-2:00 AM",
            "2:00 AM-3:00 AM"
        ],
        scores: [5, 4, 3, 2, 1]
    },
    {
        question: "If you had to get up at 6:00 AM, what would it be like?",
        options: [
            "Very easy",
            "Fairly easy",
            "Fairly difficult",
            "Very difficult"
        ],
        scores: [4, 3, 2, 1]
    },
    {
        question: "How long does it take you to become fully awake in the morning?",
        options: [
            "0-10 minutes",
            "11-20 minutes",
            "21-40 minutes",
            "More than 40 minutes"
        ],
        scores: [4, 3, 2, 1]
    },
    {
        question: "Which one of these types do you consider yourself to be?",
        options: [
            "Definitely a morning type",
            "Rather more a morning type",
            "Rather more an evening type",
            "Definitely an evening type"
        ],
        scores: [4, 3, 2, 1]
    }
];

let currentQuestion = 0;
let userAnswers = [];

function displayQuestion() {
    const questionContainer = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const question = questions[currentQuestion];
    
    questionContainer.textContent = `Question ${currentQuestion + 1}/13: ${question.question}`;
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option;
        button.onclick = () => {
            selectOption(index);
            setTimeout(() => {
                if (currentQuestion < questions.length - 1) {
                    currentQuestion++;
                    displayQuestion();
                } else {
                    showResults();
                }
            }, 300);
        };
        optionsContainer.appendChild(button);
    });
    
    updateProgressBar();
    updateNavigationButtons();
}

function selectOption(index) {
    userAnswers[currentQuestion] = index;
    const options = document.querySelectorAll('.option-btn');
    options.forEach(opt => opt.classList.remove('selected'));
    options[index].classList.add('selected');
}

function updateProgressBar() {
    const progress = document.getElementById('progress');
    const percentage = ((currentQuestion + 1) / questions.length) * 100;
    progress.style.width = `${percentage}%`;
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prev-btn');
    prevBtn.disabled = currentQuestion === 0;
}

function calculateScore() {
    let totalScore = 0;
    userAnswers.forEach((answer, index) => {
        totalScore += questions[index].scores[answer];
    });
    return totalScore;
}

function getChronotypeDescription(score) {
    if (score >= 70) return {
        type: "Definitely Morning Type",
        description: "You are a typical 'lark', with peak energy in the morning. It's recommended to schedule important tasks in the morning hours."
    };
    if (score >= 59) return {
        type: "Moderately Morning Type",
        description: "You tend towards being a morning person but have some flexibility. Your best performance is likely in the morning hours."
    };
    if (score >= 42) return {
        type: "Intermediate Type",
        description: "You have a flexible sleep-wake pattern. Try to maintain regular sleep habits while adapting to your daily requirements."
    };
    if (score >= 31) return {
        type: "Moderately Evening Type",
        description: "You tend towards being an evening person. Your performance might be better in the afternoon and evening."
    };
    return {
        type: "Definitely Evening Type",
        description: "You are a typical 'owl', with peak energy in the evening. Consider scheduling important work in the afternoon or evening."
    };
}

function showResults() {
    const score = calculateScore();
    const result = getChronotypeDescription(score);
    
    const container = document.querySelector('.test-container');
    container.innerHTML = `
        <div class="results-container">
            <h2>Test Results</h2>
            <div class="score">Your Score: ${score}</div>
            <div class="chronotype">
                <h3>Your Chronotype: ${result.type}</h3>
                <p>${result.description}</p>
            </div>
            <div class="recommendations">
                <h3>Recommendations:</h3>
                <ul>
                    <li>Try to arrange your schedule according to your natural rhythm</li>
                    <li>Schedule important work during your peak energy hours</li>
                    <li>Maintain regular sleep habits, even on weekends</li>
                    <li>Pay attention to the effects of natural light on your biological rhythm</li>
                </ul>
            </div>
            <button onclick="window.location.href='index.html'" class="nav-btn">Back to Home</button>
        </div>
    `;
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    displayQuestion();
}); 
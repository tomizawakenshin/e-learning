interface Quiz {
    num: number;
    question: string;
    options: string[];
    answer: string;
}

const quizzes: Quiz[] = [
    {
        num: 0,
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris",
    },
    {
        num: 1,
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Jupiter",
    },
    {
        num: 2,
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Charles Dickens", "Mark Twain", "Ernest Hemingway"],
        answer: "William Shakespeare",
    },
    {
        num: 3,
        question: "What is the chemical symbol for water?",
        options: ["O2", "H2O", "CO2", "HO"],
        answer: "H2O",
    },
    {
        num: 4,
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "South Korea", "India"],
        answer: "Japan",
    },
];

'use client'

import React, { useEffect, useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

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


const Answer = () => {
    const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [timeLeft, setTimeLeft] = useState(120); // 2 minutes in seconds
    const [incorrectAnswers, setIncorrectAnswers] = useState<{ question: string, correctAnswer: string, userAnswer: string | null }[]>([]);

    useEffect(() => {
        if (timeLeft === 0) {
            setShowScore(true);
            return;
        }

        const timerId = setInterval(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);

        return () => clearInterval(timerId);
    }, [timeLeft]);

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
    };

    const handleNextQuestion = () => {
        if (selectedOption === quizzes[currentQuizIndex].answer) {
            setScore(score + 1);
        } else {
            setIncorrectAnswers([...incorrectAnswers, {
                question: quizzes[currentQuizIndex].question,
                correctAnswer: quizzes[currentQuizIndex].answer,
                userAnswer: selectedOption
            }]);
        }

        const nextQuizIndex = currentQuizIndex + 1;
        if (nextQuizIndex < quizzes.length) {
            setCurrentQuizIndex(nextQuizIndex);
            setSelectedOption(null);
        } else {
            setShowScore(true);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-orange-400 p-4">
            {showScore ? (
                <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md">
                    <div className="w-1/2 mb-4">
                        <CircularProgressbar
                            value={(score / quizzes.length) * 100}
                            text={`${score}/${quizzes.length}`}
                            styles={buildStyles({
                                textColor: "#4caf50",
                                pathColor: "#4caf50",
                                trailColor: "#d6d6d6"
                            })}
                        />
                    </div>
                    <div className="text-2xl font-bold mb-2">
                        You scored {score} out of {quizzes.length}
                    </div>
                    {incorrectAnswers.length > 0 && (
                        <div className="text-left">
                            <h3 className="text-xl font-bold">Incorrect Answers:</h3>
                            <ul>
                                {incorrectAnswers.map((item, index) => (
                                    <li key={index} className="mb-2">
                                        <div><strong>Question:</strong> {item.question}</div>
                                        <div className='text-red-600'><strong>Your Answer:</strong> {item.userAnswer}</div>
                                        <div className='text-green-600'><strong>Correct Answer:</strong> {item.correctAnswer}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            ) : (
                <div>
                    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg py-40">
                        <div className="flex justify-between items-center mb-4">
                            <div className="text-sm text-gray-600">Question {currentQuizIndex + 1} of {quizzes.length}</div>
                            <div className="text-sm text-gray-600">Time left: {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60}</div>
                        </div>
                        <div className="mb-4 text-xl font-bold">{quizzes[currentQuizIndex].question}</div>
                        <div className="flex flex-col space-y-10">
                            {quizzes[currentQuizIndex].options.map((option) => (
                                <label key={option} className="mb-2">
                                    <input
                                        type="radio"
                                        name="quiz-option"
                                        value={option}
                                        onChange={() => handleOptionClick(option)}
                                        className="mr-2"
                                        checked={selectedOption === option}
                                    />
                                    {option}
                                </label>
                            ))}
                        </div>
                    </div>
                    <button
                        onClick={handleNextQuestion}
                        className="mt-4 w-full px-4 py-2 text-lg font-semibold bg-white rounded-full"
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
}

export default Answer
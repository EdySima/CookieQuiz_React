import React, { useEffect, useState } from 'react'

import '../resources/styles/Quiz.css'
import { Questionaire } from './exportQuestionaire.js'
import GameOver from './GameOver.jsx'

const DJANGO_URL = 'http://127.0.0.1:8000/quiz/'
const DJANGO_IMAGES_URL = 'http://127.0.0.1:8000/images/'
const OPENTDB_URL = 'https://opentdb.com/api.php?amount=10&type=multiple'

function shuffleAnswers(answerList) {
    return answerList
        .filter((item) => item !== undefined && item !== null && item !== '')
        .sort(() => Math.random() - 0.5)
}

function normalizeDjangoQuestions(rawList) {
    return rawList.map((item) => {
        const incorrectList = [
            item.incorrect_answer_1,
            item.incorrect_answer_2,
            item.incorrect_answer_3,
        ].filter(Boolean)

        return {
            ...item,
            imageUrl: item.image ? `${DJANGO_IMAGES_URL}${item.image}` : null,
            incorrect_answers: incorrectList,
            answers: shuffleAnswers([item.correct_answer, ...incorrectList]),
        }
    })
}

function normalizeOpenTdbQuestions(rawList) {
    return rawList.map((item) => ({
        ...item,
        imageUrl: null,
        answers: shuffleAnswers([item.correct_answer, ...item.incorrect_answers]),
    }))
}

export default function Quiz() {
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [gameEnded, setGameEnded] = useState(false);
    const [showAnswers, setShowAnswers] = useState(false);

    useEffect(() => {
        let isMounted = true;

        async function loadQuestions() {
            try {
                const res = await fetch(DJANGO_URL);
                if (!res.ok) {
                    throw new Error(`Django HTTP error: ${res.status}`);
                }

                const data = await res.json();
                const list = Array.isArray(data) ? data : data.results;

                if (!Array.isArray(list) || list.length === 0) {
                    throw new Error('Django returned an empty list');
                }

                if (isMounted) {
                    setQuestions(normalizeDjangoQuestions(list));
                }
            } catch (err) {
                console.warn('Django unavailable, falling back to OpenTDB:', err);

                try {
                    const fallbackRes = await fetch(OPENTDB_URL);
                    if (!fallbackRes.ok) {
                        throw new Error(`OpenTDB HTTP error: ${fallbackRes.status}`);
                    }

                    const fallbackData = await fallbackRes.json();
                    if (isMounted && Array.isArray(fallbackData.results)) {
                        setQuestions(normalizeOpenTdbQuestions(fallbackData.results));
                    }
                } catch (fallbackErr) {
                    console.error('Failed to load questions from both sources:', fallbackErr);
                }
            }
        }

        loadQuestions();

        return () => {
            isMounted = false;
        };
    }, []);

    const handleAnswer = (answer) => {
        setShowAnswers(true);

        setTimeout(function () {
            const newIndex = currentIndex + 1
            if (!showAnswers) {
                if (answer === questions[currentIndex].correct_answer) {
                    setScore(score + 1);
                }
            }
            if (newIndex >= questions.length) {
                setGameEnded(true);
            }
            setCurrentIndex(newIndex)
            setShowAnswers(false);
        }, 1000)
    }

    return gameEnded ? (
        <GameOver score={score} />
    ) : (
        questions.length > 0 ? (
            <div>
                <Questionaire
                    currentIndex={currentIndex}
                    data={questions[currentIndex]}
                    showAnswers={showAnswers}
                    handleAnswer={handleAnswer}
                />
            </div>
        ) : (
            <h1 className="loadingQuestion">Loading...</h1>
        )
    )
}
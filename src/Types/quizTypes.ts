import { StructuredType } from "typescript"

export type ApiQuiz = {
    category: String,
    correct_answer: String,
    difficulty: String,
    incorrect_answers: String[],
    question: String,
}

export type DevQuiz = {
    question: String,
    correct_answer: String,
    options: String[],
}
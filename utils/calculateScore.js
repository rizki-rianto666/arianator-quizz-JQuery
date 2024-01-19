import { QA } from "../model/quizData.js";
import { userAnswers } from "../controller/clickChoicesHandler.js";
let score = 0;
export default function calculateScore() {
    for (const key in QA) {
        if (Object.hasOwnProperty.call(QA, key)) {
            const element = QA[key];
            userAnswers.forEach((userAnswer) => {

                if (element.answer === userAnswer) {
                    score++; console.log("score=" + score);
                }
            })
        }
    }
    return score;

}


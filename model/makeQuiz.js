import { QA } from './quizData.js';
import { createCardsHTML } from './quizCards.js';

const keys = Object.keys(QA);

export function createHtml(index) {
    const key = keys[index];
    const qs = QA[key];
    $('#qCards').append(createCardsHTML(key, qs, index));
}

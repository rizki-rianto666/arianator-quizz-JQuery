import calculateScore from "../utils/calculateScore.js";
import { QA } from "../model/quizData.js";

let score = 0;

function submitQuizHandler() {
    // Change the subtitle quiz
    $('header h2').text('THANK YOU, NEXT?');

    score = calculateScore();
    $('#qCards').hide();

    $('#displayScore').html(`QUIZZ IS FINISHED <br>
        YOU SCORE <span class="scoreSpan">${score}</span> OUT OF <span class="scoreSpan">${Object.keys(QA).length}</span>
        `);

    if (score <= (Object.keys(QA).length / 100 * 30)) {
        $('#displayScore').append(`
            <br>
            <span class="arianator-level">
                DO YOU EVEN KNOW HER ?
            </span>
        `);
    } else if (score <= (Object.keys(QA).length / 2)) {
        $('#displayScore').append(`
            <br>
            <span class="arianator-level">
                You may like her, but you are not an Arianator, sorry
            </span>
        `);
    } else if (score <= (Object.keys(QA).length / 100 * 70)) {
        $('#displayScore').append(`
            <br>
            <span class="arianator-level">
                You Are Average Ariana Fan
            </span>
        `);
    } else if (score < (Object.keys(QA).length / 100 * 100)) {
        $('#displayScore').append(`
            <br>
            <span class="arianator-level">
                You Are A Real Arianator
            </span>
        `);
    } else if (score === Object.keys(QA).length) {
        $('#displayScore').append(`
            <br>
            <span class="arianator-level">
                YOU LOVE HER SO MUCH, YOU ARE A DIE-HARD ARIANATOR!!
            </span>
        `);
    }

    $('.wrapper').hide();
    $('.backFromDS-wrapper').show();
}

export default function submitQuizz() {
    $('#submit').on("click", submitQuizHandler);
}

import { QA, createHtml } from "./makeQuiz.js";

createHtml()

const userAnswers = [];
let score = 0;
//Looping through every parent divs in .qCards
document.querySelectorAll(".Qs").forEach((Qs) => {//Qs is the parent div element (Qs classed div)

    const options = document.querySelectorAll('#' + Qs.id + ' div');

    //Below, we loop through the options so add event listener of click when we click the answer
    options.forEach((opt) => {
        opt.addEventListener("click", () => {
            options.forEach((opt) => {
                opt.classList.remove("clicked");
                opt
            })


            opt.classList.add("clicked");

            checkingDoubleAns(userAnswers, opt);

            userAnswers.push(`${opt.getAttribute('data-option')} ${opt.innerText}`);
            console.log(userAnswers);

        })


    })

    //the overall runs like.. qCards div - we loop through the first qCards div (q1) and get the divs of it (the options/opt) - we get in to the q2 and get the options in the q2 and so on...
})



document.querySelector('.backFromDS-wrapper').style.display = 'none';
document.getElementById('submit').addEventListener("click", () => {
    //change the subtitle quizz
    document.querySelector('header h2').textContent = 'THANK YOU, NEXT?'

    calculateScore();
    document.getElementById('qCards').style.display = 'none';
    document.getElementById('displayScore').innerHTML = `QUIZZ IS FINISHED <br>
        YOU SCORE <span class="scoreSpan">${score}</span> OUT OF <span class="scoreSpan">${Object.keys(QA).length}</span>
        `
    if (score <= ((Object.keys(QA).length) / 2)) {
        document.getElementById('displayScore').innerHTML += `
        <br>
        <span class="arianator-level">
         You may like her, but you are not an Arianator, sorry
        </span>
        `
    } else if (score <= ((Object.keys(QA).length) / 100 * 70)) {
        document.getElementById('displayScore').innerHTML += `
        <br>
        <span class="arianator-level">
            You Are Average Ariana Fan
        </span>
        `
    } else if (score < ((Object.keys(QA).length) / 100 * 100)) {
        document.getElementById('displayScore').innerHTML += `
        <br>
        <span class="arianator-level">
            You Are A Real Arianator
        </span>
        `
    } else if (score === Object.keys(QA).length) {
        document.getElementById('displayScore').innerHTML += `
        <br>
        <span class="arianator-level">
         YOU LOVE HER SO MUCH, YOU ARE A DIE-HARD ARIANATOR!!
        </span>
        `
    }
    document.querySelector('button').style.display = "none"

    document.querySelector('.backFromDS-wrapper').style.display = 'block';

})



//-----------util functions-----------//


//to check double answer
function checkingDoubleAns(answersChosen, currentOpt) {
    answersChosen.forEach((answer, index) => {
        if (answer.includes(currentOpt.getAttribute('data-option'))) {
            answersChosen.splice(index, 1)
        }
    })
}

//Calculating end score

function calculateScore() {
    for (const key in QA) {
        if (Object.hasOwnProperty.call(QA, key)) {
            const element = QA[key];
            userAnswers.forEach((userAnswer) => {

                if (element.answer === userAnswer) {
                    score++; console.log(score);
                }
            })
        }
    }

}


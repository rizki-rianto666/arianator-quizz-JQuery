export const QA = {
    q1: {
        question: "What is the title of Ariana Grande's debut single?",
        choices: ['Problem', 'The Way', 'Bang Bang', 'No Tears Left to Cry'],
        answer: "q1 The Way",
    },
    q2: {
        question: "In which year did Ariana Grande release her first studio album?",
        choices: ['2011', '2013', '2015', '2018'],
        answer: "q2 2013"
    },
    q3: {
        question: "What is the name of Ariana Grande's fanbase?",
        choices: ['Arianators', 'Grande Army', 'Ariana\'s Angels', 'Moonlighters'],
        answer: "q3 Arianators"
    },
    q4: {
        question: "Which TV show marked Ariana Grande's acting debut?",
        choices: ["iCarly", "Victorious", "Sam & Cat", "Scream Queens"],
        answer: "q4 Victorious"
    },
    q5: {
        question: "Ariana Grande's 2019 hit song '7 Rings' is inspired by which classic musical?",
        choices: ["The Sound of Music", "My Fair Lady", "The Wizard of Oz", "The Phantom of the Opera"],
        answer: "q5 The Sound of Music"
    },
    q6: {
        question: "Which Ariana Grande album features the song 'Better Off'?",
        choices: ['Yours Truly', 'Dangerous Woman', 'Sweetener', 'Thank U, Next'],
        answer: "q6 Sweetener",
    },
    q7: {
        question: "Which song by Ariana Grande features the line \"Cause I... see right through you, boy and I, I...ain't feeling you no more I ain't feelin' you no more\"?",
        choices: ["Knew Better / Forever Boy", "No Tears Left to Cry", "One Last Time", "Greedy"],
        answer: "q7 Knew Better / Forever Boy"
    },
    q8: {
        question: "What is Ariana Grande's full name?",
        choices: ["Ariana Frankie Grande", "Ariana Butera", "Ariana Minaj", "Ariana Butera Grande"],
        answer: "q8 Ariana Butera Grande"
    },
    q9: {
        question: "Which Ariana Grande song features the lyrics 'I want it, I got it'?",
        choices: ['7 Rings', 'Into You', 'God is a Woman', 'Break Free'],
        answer: "q9 7 Rings",
    },
    q10: {
        question: "Which song by Ariana Grande features the line 'But this one gon' last'?",
        choices: ["Breathin", "No Tears Left to Cry", "One Last Time", "Everyday"],
        answer: "q10 No Tears Left to Cry"
    }

};

// Feel free to customize or add more questions based on your preferences!

let counter = 1;

export function createHtml() {

    for (const key in QA) {
        if (Object.hasOwnProperty.call(QA, key)) {
            const qs = QA[key];
            document.getElementById('qCards').append(createCardsHTML(key, qs))
        }

    }
    document.getElementById('qCards').innerHTML +=
        `
            <div class="button-wrapper">
                <a id="back" href="index.html">Back</a>
                <button id="submit">Submit</button>
            </div>
        `

}

//ADDITIONAL FUNCTIONS
function createCardsHTML(key, question) {
    const divQs = document.createElement('div');
    divQs.setAttribute('id', `${key}`)
    divQs.setAttribute('class', 'Qs')

    let html = `<h4 class="questions">${counter}. ${question.question}</h4>`; counter++

    question.choices.forEach(choice => {
        html += ` <div class="opt" data-option="${key}">
        <p>${choice}</p>
    </div>`
    });



    divQs.innerHTML = html;
    console.log(divQs);
    return divQs;
}


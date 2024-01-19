export function checkingDoubleAns(answersChosen, currentOpt) {
    answersChosen.forEach((answer, index) => {
        if (answer.includes(currentOpt.getAttribute('data-option'))) {
            answersChosen.splice(index, 1)
        }
    })
}
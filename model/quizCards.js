export function createCardsHTML(key, question, counter) {
    const divQs = $('<div>').attr({
        'id': key,
        'class': 'Qs'
    });

    let html = `<h4 class="questions">${counter + 1}. ${question.question}</h4>`;
    counter++;

    $.each(question.choices, function (index, choice) {
        html += `<div class="opt" data-option="${key}">
                    <p>${choice}</p>
                 </div>`;
    });

    divQs.html(html);
    return divQs.get(0); // Use get(0) to return the raw DOM element
}

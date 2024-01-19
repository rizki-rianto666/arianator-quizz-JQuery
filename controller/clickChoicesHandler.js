import { checkingDoubleAns } from "../utils/checkDoubleAnswer.js";

export const userAnswers = [];

export function choiceHandler() {
    $(".Qs").each(function () { // Qs is the parent div element (Qs classed div)

        const options = $("#" + this.id + " div");

        // Below, we loop through the options to add a click event listener when we click the answer
        options.each(function () {
            $(this).on("click", () => {
                options.removeClass("clicked");
                $(this).addClass("clicked");

                checkingDoubleAns(userAnswers, this);

                userAnswers.push(`${$(this).attr('data-option')} ${$.trim($(this).text())}`);

                console.log(userAnswers);
            });
        });

        // The overall runs like.. qCards div - we loop through the first qCards div (q1) and get the divs of it (the options/opt) - we get into the q2 and get the options in the q2 and so on...
    });
}
import { createHtml } from "../model/makeQuiz.js";
import { choiceHandler } from "../controller/clickChoicesHandler.js";
import { index, nextQuestion } from "../controller/nextQuestion.js";

$(function () {
    'use strict';
    $('.backFromDS-wrapper').hide();
    createHtml(index);
    choiceHandler();
    $('#next').on('click', nextQuestion);
});

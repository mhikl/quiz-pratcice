const question = document.getElementById('question');
choices = [
    choice_1 = document.getElementById('choice_1'),
    choice_2 = document.getElementById('choice_2'),
    choice_3 = document.getElementById('choice_3'),
    choice_4 = document.getElementById('choice_4')
];
let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let avaiableQuestions = [];
let questions = [];
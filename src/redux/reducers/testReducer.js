export function selectedTest (state =

{
module: 'Модуль',
testname: "Медиа запросы",
questions: [
    {
        question: "Какого цвета синий холодильник?",
        answers: [
            "100% черный",
            "ярко зеленый",
            "кроваво алый",
            "синий"
        ],
        rightAnswer: "синий"
    },
    {
        question: "Какого цвета желтый холодильник?",
        answers: [
            "100% черный",
            "ярко зеленый",
            "кроваво алый",
            "желтый"
        ],
        rightAnswer: "желтый"
    },
    {
        question: "Какого цвета белый холодильник?",
        answers: [
            "100% черный",
            "ярко зеленый",
            "кроваво алый",
            "белый"
        ],
        rightAnswer: "белый"
    },
    {
        question: "Какого цвета синий холодильник?",
        answers: [
            "100% черный",
            "ярко зеленый",
            "кроваво алый",
            "синий"
        ],
        rightAnswer: "синий"
    },
    {
        question: "Какого цвета синий холодильник?",
        answers: [
            "100% черный",
            "ярко зеленый",
            "кроваво алый",
            "синий"
        ],
        rightAnswer: "синий"
    },
    {
        question: "Какого цвета синий холодильник?",
        answers: [
            "100% черный",
            "ярко зеленый",
            "кроваво алый",
            "синий"
        ],
        rightAnswer: "синий"
    },
    {
        question: "Какого цвета синий холодильник?",
        answers: [
            "100% черный",
            "ярко зеленый",
            "кроваво алый",
            "синий"
        ],
        rightAnswer: "синий"
    },
    {
        question: "Какого цвета синий холодильник?",
        answers: [
            "100% черный",
            "ярко зеленый",
            "кроваво алый",
            "синий"
        ],
        rightAnswer: "синий"
    },
    {
        question: "Какого цвета синий холодильник?",
        answers: [
            "100% черный",
            "ярко зеленый",
            "кроваво алый",
            "синий"
        ],
        rightAnswer: "синий"
    },
    {
        question: "Какого цвета синий холодильник?",
        answers: [
            "100% черный",
            "ярко зеленый",
            "кроваво алый",
            "синий"
        ],
        rightAnswer: "синий"
    }
]
}
    , action) {


    switch (action.type) {
        case 'SELECTED_TEST':
            return {...action.payload};
        default:
            return state;
    }
}
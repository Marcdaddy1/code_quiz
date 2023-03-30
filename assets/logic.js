const questions = [
    {
        question: "What is the the capital of UK?",

        option: ["Manchester", "London", "Amersham", "Brighton"],

        answer: "London"
    } 
    
]
$(document).ready(function() {
    const startScreen = $("#start-screen");
    const startButton = $("#start");
    const questionScreen = $("#questions");
    const questionTitle = $("#question-title");
    const choices = $("#choices");
    const questionCount = 0;

    startButton.click(function () {    

        startScreen.addClass("hide"); 
        questionScreen.removeClass("hide");
        displayQuestion()
    })

    function displayQuestion() {
        questionTitle.text(questions[
            questionCount
        ].question)

        for (let i = 0; i < 4; i++) {
            const button = $("<button>")
            button.val(questions[questionCount].option[i])
            button.text(questions[questionCount].option[i])
            choices.append(button)
        }
    }
})


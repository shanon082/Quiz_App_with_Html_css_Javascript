const questions = [
    {
        question:"Which country won the world cup 2022?",
        answers:[
            {Text:"Morocco",correct:"false"},
            {Text:"Spain",correct:"false"},
            {Text:"Argentina",correct:"true"},
            {Text:"France",correct:"false"}
        ]
    },
    {
        question:"Which country won the world cup 2022?",
        answers:[
            {Text:"Morocco",correct:"false"},
            {Text:"Spain",correct:"false"},
            {Text:"Argentina",correct:"true"},
            {Text:"France",correct:"false"}
        ]
    },
    {
        question:"Which country won the world cup 2022?",
        answers:[
            {Text:"Morocco",correct:"false"},
            {Text:"Spain",correct:"false"},
            {Text:"Argentina",correct:"true"},
            {Text:"France",correct:"false"}
        ]
    }
];

let scorevalue = 0;
let currentquestionindex = 0;

 let questionElement = document.getElementById('question');
 let answerButton = document.getElementById('answerBtn');
 let nextButton = document.getElementById('nextBtn');

 function startQuiz(){
    scorevalue=0;
    currentquestionindex =0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentquestionindex];
    let questionNo = currentquestionindex +1;
    questionElement.innerHTML=questionNo+"."+currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.Text;
        button.classList.add("answer");
        answerButton.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });}

    function resetState(){
        nextButton.style.display ="none";
        while(answerButton.firstChild){
            answerButton.removeChild(answerButton.firstChild);
        }
    }
    function selectAnswer(e){
        const selectedButton = e.target;
        const isCorrect = selectedButton.dataset.correct==="true";
        if(isCorrect){
            selectedButton.classList.add("correct");
            scorevalue++;
        }
        else{
            selectedButton.classList.add("incorrect");
        }
        Array.from(answerButton.children).forEach(button=>{
            if(button.dataset.correct==="true"){
                button.classList.add("correct");
            }
            button.disabled = "true";
        });
        nextButton.style.display ="block";
    }
    nextButton.addEventListener("click",()=>{
        if (currentquestionindex < questions.length) {
            handlenxtBtn();
        }
        else{
            startQuiz();
        }
    })
    
    function handlenxtBtn(){
        currentquestionindex++;
        if(currentquestionindex <questions.length){
            showQuestion();
        }
        else{
            showScore();
        }
    }

    function showScore(){
        resetState();
        questionElement.innerHTML = "You scored ${scorevalue} out of ${questions.length}!";
        nextButton.innerHTML ="Play Again";
        nextButton.style.display ="block";
    }
    /*function showScore(){
        resetState();
        questionElement.innerHTML=("You scored ${scorevalue} out of ${questions.length}");
        
    }*/
    
    startQuiz();
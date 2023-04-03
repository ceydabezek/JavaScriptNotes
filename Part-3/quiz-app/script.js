
function Question (questionText,answerChoices,rightAnswer){
    this.questionText = questionText;
    this.answerChoices = answerChoices;
    this.rightAnswer = rightAnswer;
    
    }
    Question.prototype.checkAnswer = function(rightAnswer){
        return rightAnswer == this.rightAnswer
}

let question1 = new Question("Which one is js package management application?",{a:"Node.js",b: "Typescript", c: "Npm"},"c");
let question2 = new Question("Which one is .net package management application?",{a:"Node.js",b: "Nuget", c: "Npm"},"b");

let Questions = [
    new Question ("1-Which one is js package management application?",{a:"Node.js",b: "Typescript", c: "Npm"},"c"),
    new Question ("2-Which one is js package management application?",{a:"Node.js",b: "Typescript", c: "Npm"},"c"),
    new Question ("3-Which one is js package management application?",{a:"Node.js",b: "Typescript", c: "Npm"},"c"),
    new Question ("4-Which one is js package management application?",{a:"Node.js",b: "Typescript", c: "Npm"},"c"),
    
];

function Quiz (Questions){
    this.Questions = Questions;
    this.questionIndex = 0;
}

Quiz.prototype.bringQuestion = function(){
    return this.Questions[this.questionIndex];
}

const quiz = new Quiz(Questions);



document.querySelector(".btn-start").addEventListener("click", function(){
    if (quiz.Questions.length != quiz.questionIndex){
    console.log(quiz.bringQuestion());
    quiz.questionIndex += 1;
} else{
    console.log ("quiz bitti");
} 
})


  
  

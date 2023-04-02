// let question = {
//     questionText: "dhhhhhdd?",
//     answerChoices :{
//         a: "ddddd",
//         b: "bbbbb",
//         c: "ccccc",
//     } ,
//     rightAnswer : "ccccc",
//     checkAnswer : function (question) { 
//         return question == this.rightAnswer
//     }
// }

function Question (questionText,answerChoices,rightAnswer){
    this.questionText = questionText;
    this.answerChoices = answerChoices;
    this.rightAnswer = rightAnswer;
    this.checkAnswer = function(rightAnswer){
        return rightAnswer == this.rightAnswer
    }
}

let question1 = new Question("Which one is js package management application?",{a:"Node.js",b: "Typescript", c: "Npm"},"c");

//  let Questions = [
//     new Question ("Which one is js package management application?",{a:"Node.js",b: "Typescript", c: "Npm"},"c"),
    
//  ]
  
  console.log(question1.questionText);
  console.log(question1.rightAnswer);
  console.log(question1.checkAnswer("b"));


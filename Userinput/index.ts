import inquirer, { Answers, QuestionCollection } from "inquirer";

const questions:QuestionCollection = [{
    name: 'age',
    type: 'number',
    message: 'What is your age?'
}]

var answers: Promise<Answers> = inquirer.prompt(questions)
answers.then((answers: Answers)=>{
console.log('Answers',answers);

})
.catch((err)=>{
console.log('Err',err);

})
import inquirer from "inquirer";
const questions = [{
        name: 'age',
        type: 'number',
        message: 'What is your age?'
    }];
var answers = inquirer.prompt(questions);
answers.then((answers) => {
    console.log('Answers', answers);
})
    .catch((err) => {
    console.log('Err', err);
});

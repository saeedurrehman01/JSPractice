// import inquirer from "inquirer";
// const Questions = [
//     {
//         name: "num1",
//         type: "number",
//         message: "Enter 1st Number",
//     },
//     {
//         name: "num2",
//         type: "number",
//         message: "Enter 2nd Number",
//     },
//     {
//         name: "operations",
//         type: "list",
//         message: "Which operation do you want to perform",
//         choices: ["+", "-", "*", "/"],
//     },
// ];
// var answers = inquirer.prompt(Questions);
// answers
//     .then((answers) => {
//     switch (answers.operations) {
//         case "+":
//             console.log(`Result is ${answers.num1 + answers.num2}`);
//             break;
//         case "-":
//             console.log(`Result is ${answers.num1 - answers.num2}`);
//             break;
//         case "*":
//             console.log(`Result is ${answers.num1 * answers.num2}`);
//             break;
//         case "/":
//             console.log(`Result is ${answers.num1 / answers.num2}`);
//             break;
//         default:
//             break;
//     }
//     // console.log("Answers", answers);
// })
//     .catch((err) => {
//     console.log("Error", err);
// });



function HelloWorld() {
  return function () {
    return "Hello World";
  };
}

const helloFunc = HelloWorld();
console.log(helloFunc());

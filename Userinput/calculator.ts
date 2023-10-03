import inquirer, { Answers, QuestionCollection } from "inquirer";

const Questions: QuestionCollection = [
  {
    name: "num1",
    type: "number",
    message: "Enter 1st Number",
  },
  {
    name: "num2",
    type: "number",
    message: "Enter 2nd Number",
  },
  {
    name: "operations",
    type: "list",
    message: "Which operation do you want to perform",
    choices: ["+", "-", "*", "/"],
  },
];

var answers: Promise<Answers> = inquirer.prompt(Questions);

answers
  .then((answers) => {
    switch (answers.operations) {
      case "+":
        console.log(`Result is ${answers.num1 + answers.num2}`);

        break;
      case "-":
        console.log(`Result is ${answers.num1 - answers.num2}`);

        break;
      case "*":
        console.log(`Result is ${answers.num1 * answers.num2}`);

        break;
      case "/":
        console.log(`Result is ${answers.num1 / answers.num2}`);

        break;
      default:
        break;
    }
    // console.log("Answers", answers);
  })

  .catch((err) => {
    console.log("Error", err);
  });

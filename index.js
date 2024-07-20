#! /usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "userId",
        message: "Kindly enter your Id",
    },
    { type: "number",
        name: "userPin",
        message: "Kindly enter your Pin",
    },
    {
        type: "list",
        name: "accountType",
        message: "select your account type",
        choices: ["current", "saving"],
        when(answers) {
            return answers.transactionType;
        },
    },
    {
        type: "list",
        name: "transactionType",
        message: "select your transaction",
        choices: ["fast cash", "withdraw"],
    },
    {
        type: "list",
        name: "amount",
        message: "select your amount ",
        choices: [1000, 2000, 5000, 10000, 15000],
        when(answers) {
            return answers.transactionType == "fast cash";
        },
    },
    { type: "list",
        name: "amount",
        message: "enter your amount ",
        choices: [1000, 2000, 5000, 10000, 15000],
        when(answers) {
            return answers.transactionType == "withdraw";
        },
    }
]);
if (answers.userId && answers.userPin) {
    const balance = Math.floor(Math.random() * 10000000);
    console.log(balance);
    const EnteredAmount = answers.amount;
    if (balance >= EnteredAmount) {
        const remaining = balance - EnteredAmount;
        console.log("your remaining balance is", remaining);
    }
    else {
        console.log("insufficient balance");
    }
}

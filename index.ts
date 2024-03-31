#! /usr/bin/env node

import inquirer from "inquirer";
//Printing a Welcome Message
console.log("\n\tWelcome To \ 'CodeWithSakina\' - CLI Simple Calculator\n");

//Asking Questions from users through Inquirer
let answer = await  inquirer.prompt([
    {message: "Enter your first number", type: "number", name: "firstNumber"},
    {message: "Enter your send number", type: "number", name: "secondNumber"},
    {
    messagr: "Select one Operator to perform Operations",
    type:"list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
        },
    
])

//Conditional statements If-Else

if(answer.operator=== "Addition"){
    console.log(answer.firstNumber + answer.secondNumber)
}
else if (answer.operator === "Subtraction"){
     console.log(answer.firstNumber - answer.secondNumber)
}
else if (answer.operator === "Multiplication"){
    console.log(answer.firstNumber * answer.secondNumber)
}
else if (answer.operator === "Division"){
    console.log(answer.firstNumber / answer.secondNumber)
}
else{
    console.log("Invalid Input")
}
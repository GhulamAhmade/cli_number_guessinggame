#! /usr/bin/env node

import inquirer from "inquirer";

//1 : first computer will generate random number -Done.

//2 : user input for guessing number -Done.

//3 : compare user input with computer generated number  -Done

const randomnumber = Math.floor(Math.random() * 6 + 1);

const answeres = await inquirer.prompt(
    [
        {
            name:"userGuessedNumber",
            type:"number",
            message:"please guess a number between 6-1:",

        },
    ]
)
if(answeres.userGuessedNumber === randomnumber){
    console.log("Congraturation you guessed right number.")
}else{
    console.log("You guessed wrong number.")
}
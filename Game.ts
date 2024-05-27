import inquirer from "inquirer";
import chalk from "chalk";

const game = await inquirer.prompt({
    name: "input1",
    type: "list",
    message: "Select one from these",
    choices: ["Rock", "Paper", "Sciccor"]
});

const game1 = await inquirer.prompt({
    name: "input2",
    type: "list",
    message: "Again Select one from these",
    choices: ["Rock", "Paper", "Sciccor"]
});

if (game.input1 === "Rock" && game1.input2 === "Rock") {
    console.log(chalk.greenBright("Tie"));
} 

else if (game.input1 === "Rock" && game1.input2 === "Paper") {
    console.log(chalk.yellow("Paper is win"));
}

 else if (game.input1 === "Rock" && game1.input2 === "Sciccor") {
    console.log(chalk.yellow("Rock is win"));
}

 else if (game.input1 === "Paper" && game1.input2 === "Rock") {
    console.log(chalk.yellow("Paper is win"));
}

 else if (game.input1 === "Paper" && game1.input2 === "Paper") {
    console.log(chalk.greenBright("Tie"));
}

 else if (game.input1 === "Paper" && game1.input2 === "Sciccor") {
    console.log(chalk.yellow("Sciccor is win"));
}


 else if (game.input1 === "Sciccor" && game1.input2 === "Rock") {
    console.log(chalk.yellow("Rock is win"));
}

 else if (game.input1 === "Sciccor" && game1.input2 === "Paper") {
    console.log(chalk.yellow("Sciccor is win"));
}

 else if (game.input1 === "Sciccor" && game1.input2 === "Sciccor") {
    console.log(chalk.greenBright("Tie"));
}

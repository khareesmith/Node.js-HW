const fs = require('fs');
const inquirer = require('inquirer');

const greeting = require("./greeting");

console.log(greeting.greeting);

const userQuestions = () => {
inquirer.prompt([
        {
            type: "input",
            message: "Please input username: ",
            name: "username"
        },
        {
            type: "password",
            message: "Please input password: ",
            name: "pass"
        },
        {
            type: "password",
            message: "Re-enter password for confirmation: ",
            name: "pass_confirm"
        },
    ]).then(response => {
        if (response.pass === response.pass_confirm) {
            console.log("Passwords successfully confirmed!");
            fs.writeFile("userPassword.txt", JSON.stringify(response.pass, null), err => {
                console.log(err);
            })
        }
        else {
            console.log("Passwords do not match!");
        }
    }
        )
};

userQuestions();
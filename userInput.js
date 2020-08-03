//Creates a constant that requires the File System module for node.
const fs = require('fs');

//Creates a constant that requires the Inquirer module for node.
const inquirer = require('inquirer');

//Creates a constant that requires the greeting.js file located in same directory.
const greeting = require("./greeting");

//Logs to the console the greeting string that is prepared in the greeting.js file.
console.log(greeting.greeting);

//Creates a function called userQuestions. This function runs the inquirer prompt that asks for information regarding id number, username, password, and confirmation for password. 
const userQuestions = () => 
{
    inquirer.prompt([
        {
            type: "number",
            message: "Hello, please enter ID number: ",
            name: "id"
        },
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
    //After inquirer prompt is run, the reponses are chaneled into another function. 
    ]).then(response => {
        //If passwords match, a success message is printed to the console and the password information is saved in a .txt file
        if (response.pass === response.pass_confirm) {
            console.log("Passwords successfully confirmed!");
            fs.writeFile("userPassword.txt", JSON.stringify(response.pass), err => {
                console.log(err);
            })
        }
        //If passwords do not match, a message is logged to the console and no information is saved.
        else {
            console.log("Passwords do not match!");
        }
    }
        )
};

//Executes userQuestions function.
userQuestions();
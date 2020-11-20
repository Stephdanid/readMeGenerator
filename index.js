// array of questions for user
const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js")
const questions = [{
    type: 'input',
    message: 'What is your name?',
    name: 'title',
}];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if (error) throw error;
        console.log("File written successfully");
    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then((response) => {
            console.log(response)
            writeToFile("README.md", generateMarkdown(response));
        });
}

// function call to initialize program
init();

// to be continued https: //code.visualstudio.com/docs/languages/markdown
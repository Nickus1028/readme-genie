// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
// TODO: Create an array of questions for user input
const questions = [];

const promptUser = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'Title',
            message: 'What is the Title of your project (REQUIRED)?',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('You must enter a title!');
                    return false;
                }
            }
            
        },
        {
            type: 'input',
            name: 'Description',
            message: 'What is the description of your project?',
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'What are the instructions for installation?'
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'What are some examples of uses for your application?'
        },
        {
            type: 'checkbox',
            name: 'Licenses',
            message: 'Which licenses? Choose all that apply.',
            choices: ['MIT', 'Apache','GNU','ISC', 'OBSD', 'None' ]
        },
        {
            type: 'input',
            name: 'Contributors',
            message: 'Who were the contributing developers including yourself?'
        },
        {
            type: 'input',
            name: 'Tests',
            message: 'List some tests for your application.'
        },
        {
            type: 'input',
            name: 'Username',
            message: 'What is your Github username? (REQUIRED)',
            validate: userinput => {
                if (userinput) {
                    return true;
                } else {
                    console.log('You must enter a Github username!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?'
        }
    ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

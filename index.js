// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = () => {
    answers = []
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'title',
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
            name: 'description',
            message: 'What is the description of your project?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the instructions for installation?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What are some examples of uses for your application?'
        },
        {
            type: 'checkbox',
            name: 'licenses',
            message: 'Which licenses? Choose all that apply.',
            choices: ['MIT', 'Apache','GNU','ISC', 'OBSD', 'None' ]
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Who were the contributing developers including yourself?'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What are some tests you performed for your application.'
        },
        {
            type: 'input',
            name: 'username',
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
};

// TODO: Create a function to write README file
function writeToFile (readME) {
    return new Promise((success, failure) => {
        fs.writeFile('./dist/README.md', readME, err => {
            if (err) {
                failure(err);
                return;
              }
              success({
                  ok: true,
                  message: 'Successfully generated a ReadMe at ./dist/README.md'
            });
        });
    });
};


// TODO: Create a function to initialize app
// Function call to initialize app

questions()
    .then(answers => {
        return generateMarkdown(answers);
    })
    .then(readME => {
        return writeToFile(readME)
    })
    .then(writefileResponse => {
        console.log(writefileResponse.message)
    })
    .catch(err => {
        console.log(err);
    });


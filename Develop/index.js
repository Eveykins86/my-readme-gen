// Packages needed for this application
const fs = require('fs');
const { default: inquirer } = require('inquirer');
const path = inquirer('path');
const generateMarkdown = require('./generateMardown.js');


// An array of questions for user input
const filePath = './Assets/README.md';
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your prject?"
    },
    {
        type: "confirm",
        name: "contents",
        message: "Would you like to include a table of contents?",
    },
    {
        type: "input",
        name: "dicription",
        message: "What does your project accomplish?"
    },
    {
        type: "input",
        name: "installation",
        message: "What are the installation instructions?"
    },
    {
        type: "input",
        name: "usage",
        message: "What is the usage information?"
    },
    {
        type: "input",
        name: "contribution",
        message: "What are the contribution guidelines?"
    },
    {
        type: "input",
        name: "tests",
        message: "What are the test instructions?"
    },
    {
        type: "checkbox",
        name: "license",
        message: "What license do you want to use?",
        choices: ["MIT License", "Apache License 2.0", "Boost Software License 1.0", "Eclipse Public License 2.0" ]
    },
    {
        type: "input",
        name: "github",
        message: "What is your Github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
];

// Function to write the README content to a file
function writeFile(data) {
    fs.writeFile('./Assets/READMEsample.md', generateMarkdown(data), (err) => {
      if (err) {
        console.error('Error writing to file:', err);
      } else {
        console.log('README file created successfully!');
      }
    });
  };
  
  // Function to initialize app
  function init() {
    inquirer
      .prompt(questions)
      .then((answers) => {
        console.log(answers);
        writeFile(answers)
      })
      .catch((error) => {
        console.error('Error occurred during prompt:', error);
      });
  }
  
  // Function call to initialize app
  init();

  module.exports = writeFile;
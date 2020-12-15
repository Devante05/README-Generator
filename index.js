const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');

const writeFileAsync = util.promisify(fs.writeFile);


// array of questions for user
const promptUser = () =>
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the project?',
    },
    {
      type: 'input',
      name: 'about',
      message: 'Briefly desrcibe project.',
    },
    {
      type: 'input',
      name: 'built',
      message: 'What was this project built with?',
    },
    {
      type: 'input',
      name: 'prerequisites',
      message: 'what npms need to be installed in order to run project?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter the link to clone repo',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What could this project be used for?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How to contribute to repository.',
    },
 
  ]);


// function to write README file
promptUser()
  .then((answers) => writeFileAsync('README.md', generateMarkdown(answers)))
  .then(() => console.log('Successfully wrote to README.md'))
  .catch((err) => console.error(err));



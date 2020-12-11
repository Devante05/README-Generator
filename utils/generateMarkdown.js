const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// function to generate markdown for README
const generateMarkdown = (answers) =>`
  ### ${answers.name}

  ## About The Project
  ${answers.about}
  
  <!-- [!]() -->
  <!-- [!]() -->
  <!-- [!]() -->
  
  
  ### Built With
  ${answers.built}
  
  
  ### Getting Started

  ## Prerequisites
  ${answers.prerequisites}

  
  ## Installation
  ${answers.installation}

  
  ## Usage
  ${answers.usage}

  
  ## Contributing
  ${answers.contributing}

  
  ## License
    MIT
  
  ## Contact
  https://www.linkedin.com/in/devanté-williams-73b69b11a

  williams.devante05@gmail.com
`


module.exports = generateMarkdown;

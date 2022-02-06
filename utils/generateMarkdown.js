// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenses) {
  badge = [];
  if (licenses !== 'None') {    
      licenses.forEach(entry => {
          badge.push("![License](https://img.shields.io/static/v1?label=License&message=" + entry + "&color=BLUE)");
    })
    } else {
      return '';
    }
  console.log(badge)
  return badge.join(' ');
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenses) {
  if(licenses) {

  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenses) {
  if(licenses) {

  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  const {title, description, installation, usage, licenses, contributors, tests, username, email} = answers
  return `

${renderLicenseBadge(licenses)}

# ${title}

## Description
${description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## Licenses
${renderLicenseSection(licenses)}: ${renderLicenseLink(licenses)}

## Contributing
${contributors}

## Tests
${tests}

## Questions
Contact information for questions:  

Github: https://www.github.com/${username}  
Email: ${email}
`;
}
module.exports = generateMarkdown;

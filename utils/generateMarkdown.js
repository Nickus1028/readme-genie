// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenses) {
  badge = [];
  if (licenses !== 'None') {    
      licenses.forEach(entry => {
          badge.push("![License](https://img.shields.io/static/v1?label=License&message=" + entry + "&color=BLUE)");
    })
    } else {
      return;
    }
  return badge.join(' ');
}

// Create a function that returns the license section of README and creates link
// If there is no license, return an empty string
function renderLicenseSection(licenses) {
  licensesSection = [];
  if (licenses !== 'None') {    
    licenses.forEach(entry => {
      if (entry = 'MIT') {
          licensesSection.push('<a href = "https://opensource.org/licenses/MIT"> *' + entry + '</a><br />')
      } else if (entry = 'Apache') {
        licensesSection.push('<a href = "https://opensource.org/licenses/Apache-2.0"> *' + entry + '</a><br />')
      } else if (entry = 'GNU') {
          licensesSection.push('<a href = "https://opensource.org/licenses/gpl-license"> *' + entry + '</a><br />')
      } else if (entry = 'ISC') {
        licensesSection.push('<a href = "https://opensource.org/licenses/ISC"> *' + entry + '</a><br />')
      } else if (entry = 'OBSD') {
        licensesSection.push('<a href = "https://www.openbsd.org/policy.html"> *' + entry + '</a><br />')
      } else {
          return;
      }
  })
  } else {
    return '';
  }
  return licensesSection;
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
${renderLicenseSection(licenses)}

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

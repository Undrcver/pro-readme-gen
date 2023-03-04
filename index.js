const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
        message: 'Give a name to this project?:',
        name: 'title'
    },
    {
        message: 'what is the description of this project?:',
        name: 'description'
    },
    {
        message: 'Enter instllation steps:',
        name: 'install'
    },
    {
        message: 'Usage steps:',
        name: 'usage'
    },
    {
        message: 'Please enter any contribution guidelines:',
        name: 'guidelines'
    },
    {
        message: 'Please enter the test instructions:',
        name: 'test'
    },
    {
        type: 'rawlist',
        message: 'Choose a license for your application:',
        name: 'license',
        choices: [
            { name: 'MIT', value: 'mit' },
            { name: 'Other', value: 'other' },
            { name: 'Apache', value: 'apache' },
        ]
    },
    {
        message: 'Please enter your GitHub username:',
        name: 'username'
    },
    {
        message: 'Please enter you email address:',
        name: 'email'
    },
]).then((answers) => {
    const newReadme = `
    
# ${answers['title']}
![License](https://img.shields.io/badge/License-${answers['license']}-blue)
    
## Table of Contents
    
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)
    
## Description
    
${answers['description']}
## Installation
    
${answers['install']}
## Usage
    
${answers['usage']}
## License
    
Covered under the ${answers['license']} license.
## Contributing
    
${answers['guidelines']}
## Tests
    
${answers['test']}
## Questions
    
If you have any comments or questions please contact me via GitHub or Email:
    
- [GitHub](https://github.com/${answers['username']})
- Email: ${answers['email']}`;
    fs.writeFile('./dist/README.md', newReadme, (err) => {
        err ? console.error(err) : console.log('README.md succesfully created!');
    })
});
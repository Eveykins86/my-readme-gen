// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (!license) {
    return ''; // If no license is provided, return an empty string
  }

  // Define an object to map the license name to its corresponding badge URL
  const licenseBadges = {
    'MIT License': 'https://img.shields.io/badge/License-MIT-yellow.svg',
    'Apache License 2.0': 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
    'Boost Software License 1.0': 'https://img.shields.io/badge/License-Boost%201.0-lightblue.svg',
    'Eclipse Public License 2.0': 'https://img.shields.io/badge/License-EPL%202.0-red.svg',
  };

  // Check if the provided license is a valid key in the licenseBadges object
  if (licenseBadges.hasOwnProperty(license)) {
    // If the license is valid, return the corresponding badge
    return `![License](${licenseBadges[license]})`;
  } else {
    // If the provided license is not valid, return an empty string
    return '';
  }
}

const license1 = 'MIT License';
const badge1 = renderLicenseBadge(license1);
console.log(badge1); // Output: ![License](https://img.shields.io/badge/License-MIT-yellow.svg)

const license2 = 'Apache License 2.0';
const badge2 = renderLicenseBadge(license2);
console.log(badge2); // Output: ![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)

const license3 = 'Boost Software License 1.0';
const badge3 = renderLicenseBadge(license3);
console.log(badge3); // Output: ![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)

const license4 = 'Eclipse Public License 2.0';
const badge4 = renderLicenseBadge(license4);
console.log(badge4); // Output: ![License](https://img.shields.io/badge/License-EPL%202.0-red.svg)

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  if (!license) {
    return ''; // If no license is provided, return an empty string
  }

  const licenseLinks = {
    'MIT License': 'https://opensource.org/licenses/MIT',
    'Apache License 2.0': 'https://www.apache.org/licenses/LICENSE-2.0',
    'Boost Software License 1.0': 'https://www.boost.org/LICENSE_1_0.txt',
    'Eclipse Public License 2.0': 'https://www.eclipse.org/legal/epl-2.0/',
  };

  if (licenseLinks.hasOwnProperty(license)) {
    return licenseLinks[license];
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license);

  if (!badge || !link) {
    return ''; // If either the badge or the link is missing, return an empty string
  }

  return `## License\n${badge}\n\nThis project is licensed under the [${license}](${link}) license.`;
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}

## Description
${data.description}

${data.contents ? '## Table of Contents\n' +
  '- [Installation](#installation)\n' +
  '- [Usage](#usage)\n' +
  '- [Contribution](#contribution)\n' +
  '- [Tests](#tests)\n' +
  '- [License](#license)\n' : ''}

## Installation
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Tests
${data.tests}

${licenseSection}
`;
}

module.exports = generateMarkdown;
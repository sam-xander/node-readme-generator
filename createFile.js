const fs = require("fs");

function createFile(readme) {
  fs.writeFile(
    "./created-files/README.md",
    `
  # ${readme.title}

  ![License](https://img.shields.io/badge/License-${readme.license}-blue.svg)

  ## Description

  ${readme.description}

  ## Table of Contents

  - [Installation](#installation)

  - [Usage](#usage)

  - [Contributing](#Contributing)

  - [Licence](#licence)

  - [Tests](#Tests)

  - [Questions](#Questions)

  ## Installation

  ${readme.installation}

  ## Usage

  ${readme.usage}

  ## Contributing

  ${readme.contributing}

  ## License

  This application is covered under the following license: ${readme.license}.

  ## Tests

  ${readme.tests}

  ## Questions

  ### [GitHub](https://github.com/${readme.github})

  ### Email [${readme.email}](${readme.email}) with any additional questions.
  `,
    (err) => console.log(err)
  );
}

module.exports = createFile;

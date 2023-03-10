const fs = require("fs");

function createFile(readme) {
  fs.writeFile(
    "./created-readme/README.md",
    `
  ${readme.title ? `# ${readme.title}` : ""}

  ${
    readme.license
      ? `![License](https://img.shields.io/badge/License-${readme.license}-blue.svg)
      `
      : ""
  }

  ${
    readme.description
      ? `## Description
  ${readme.description}`
      : ""
  }

  ---

  ## Table of Contents
  ${readme.installation ? `- [Installation](#installation)` : ""}

  ${readme.usage ? `- [Usage](#usage)` : ""}

  ${readme.contributing ? `- [Contributing](#contributing)` : ""}

  ${readme.license ? `- [License](#license)` : ""}

  ${readme.tests ? `- [Tests](#tests)` : ""}

  ${readme.github | readme.email ? `- [Questions](#questions)` : ""}

  ${
    readme.installation
      ? `## Installation
  ${readme.installation}`
      : ""
  }

  ${
    readme.usage
      ? `## Usage
  ${readme.usage}`
      : ""
  }

  ${
    readme.contributing
      ? `## Contributing
  ${readme.contributing}`
      : ""
  }

  ${
    readme.license
      ? `## License
  This application is covered under the following license: ${readme.license}.`
      : ""
  }

  ${
    readme.tests
      ? `## Tests
  ${readme.tests}`
      : ""
  }

  ${readme.github || readme.email ? `## Questions` : ""}

  ${readme.github ? `### [GitHub](https://github.com/${readme.github})` : ""}

  ${
    readme.email
      ? `### Email [${readme.email}](${readme.email}) with any additional questions.`
      : ""
  }`,
    (err) => console.log(err)
  );
}

module.exports = createFile;

const inquirer = require("inquirer");
const createFile = require("./createFile");

function promptUser() {
  const readme = {};

  const licenses = [
    "Apache_2.0",
    "GPLv3",
    "MIT",
    "BSD_2--Clause",
    "BSD_3--Clause",
    "Boost_1.0",
    "CC0_1.0",
    "EPL_2.0",
    "AGPL_v3",
    "GPL_v2",
    "LGPL_v2.1",
    "MPL_2.0",
    "Unlicense",
  ];

  const prompts = {
    title: {
      type: "input",
      name: "title",
      message: "Enter a title:",
    },
    description: {
      type: "input",
      name: "description",
      message: "Enter a description:",
    },
    installation: {
      type: "input",
      name: "installation",
      message: "Enter installation instructions:",
    },
    usage: {
      type: "input",
      name: "usage",
      message: "Enter usage information:",
    },
    contributing: {
      type: "input",
      name: "contributing",
      message: "Enter contribution guidelines:",
    },
    license: {
      type: "list",
      name: "license",
      default: licenses[2],
      choices: licenses,

      message: "Choose a license:",
    },
    tests: {
      type: "input",
      name: "tests",
      message: "Enter test instructions:",
    },
    github: {
      type: "input",
      name: "github",
      message: "Enter a GitHub username:",
    },
    email: {
      type: "input",
      name: "email",
      message: "Enter an email address:",
    },
  };

  const prompt = inquirer.prompt;

  prompt(prompts.title).then((data) => {
    readme.title = data.title;

    prompt(prompts.description).then((data) => {
      readme.description = data.description;

      prompt(prompts.installation).then((data) => {
        readme.installation = data.installation;

        prompt(prompts.usage).then((data) => {
          readme.usage = data.usage;

          prompt(prompts.contributing).then((data) => {
            readme.contributing = data.contributing;

            prompt(prompts.license).then((data) => {
              readme.license = data.license;

              prompt(prompts.tests).then((data) => {
                readme.tests = data.tests;

                prompt(prompts.github).then((data) => {
                  readme.github = data.github;

                  prompt(prompts.email).then((data) => {
                    readme.email = data.email;

                    createFile(readme);
                  });
                });
              });
            });
          });
        });
      });
    });
  });
}

module.exports = promptUser;

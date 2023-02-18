const inquirer = require("inquirer");

const config = require("../../config");
const download = require("./download");

const etcAction = async function (project, args) {
  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "framework",
      choices: config.framework,
      message: "which framework you want to use"
    }
  ]);

  download(config.frameworkAddress[answer.framework], project);
};

module.exports = etcAction;

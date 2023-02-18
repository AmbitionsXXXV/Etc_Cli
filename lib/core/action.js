const inquirer = require("inquirer");
const config = require("../../config");

const etcAction = function (project, args) {
  inquirer
    .prompt([
      {
        type: "list",
        name: "framework",
        choices: config.framework,
        message: "which framework you want to use"
      }
    ])
    .then((answer) => {
      console.log(answer);
    });
};

module.exports = etcAction;

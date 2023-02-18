const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      name: "username",
      message: "your username"
    }
  ])
  .then((answer) => {
    console.log(answer);
  });

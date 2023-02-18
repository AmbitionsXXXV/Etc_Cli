const ora = require("ora");

const spinner = ora().start();
spinner.text = "loading...";
spinner.succeed("执行成功");

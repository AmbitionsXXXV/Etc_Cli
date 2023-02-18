const etcAction = require("./action");

const etcCommander = function (program) {
  program
    .command("create <project> [others...]")
    .alias("crt")
    .description("create project")
    .action(etcAction);
};

module.exports = etcCommander;

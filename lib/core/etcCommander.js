const etcCommander = function (program) {
  program
    .command("create <project> [others...]")
    .alias("crt")
    .description("create project")
    .action((project, args) => {
      console.log(project);
      console.log(args);
    });
};

module.exports = etcCommander;

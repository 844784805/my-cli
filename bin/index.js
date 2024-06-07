#! /usr/bin/env node
console.log("start cli");

const commander = require("commander");
const program = new commander.Command();
const fs = require("fs-extra");
// import chalk from "chalk"; //命令行美化工具
// import ora from "ora";
// import inquirer from "inquirer";

program
  .command("create")
  .alias("init")
  .description("创建一个项目")
  .option("-f,--force", "如果文件存在就强行覆盖")
  .option("-l, --local-path <path>", "从本地下载模版")
  .action(async (option1) => {
    console.log(option1);
    const projectName = process.argv[3];
    let path = option1.localPath;
    try {
      await fs.copySync(path, `./${projectName}`);
      console.log("模版复制成功");
    } catch (err) {
      console.error(err);
    }
  });

program.parse();

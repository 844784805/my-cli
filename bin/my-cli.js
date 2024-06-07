#! /usr/bin/env node
console.log("start my-cli");

import chalk from "chalk"; //命令行美化工具
import ora from "ora";
import inquirer from "inquirer"; // 命令行交互工具
import fs from "fs-extra";
import { program } from "commander";
import path from "path";
import download from "download-git-repo";

program
  .command("create")
  .alias("init")
  .description("创建一个项目")
  .option("-f,--force", "如果文件存在就强行覆盖")
  .option("-l, --local-path <path>", "从本地下载模版")
  .action(async (option1) => {
    console.log(option1, "\n", process.argv);
    const projectName = process.argv[3];
    // let path = option1.localPath;
    try {
      let { choose } = await inquirer.prompt([
        {
          name: "choose",
          type: "list",
          message: "请选择一个模版创建项目",
          choices: ["template-one", "template-two"],
        },
      ]);

      const syncTemplate = ora("同步模版中...");
      syncTemplate.start();
      // 本地拷贝
      // await fs.copySync(
      //   path.resolve(option1.localPath, choose),
      //   `./${projectName}`
      // );
      down()
      syncTemplate.succeed();
      console.log(
        chalk.green(chalk.blue.underline.bold(projectName) + " 项目创建成功!")
      );
      console.log(`
          __      __   __     __       _ _ _
         /  |    /  |  | |   / /    ___| (_) |
        / /| |  / /| |  |_| /_/___ / __| | | |
       / /  | |/ /  | |   | |  ___| (__| | |_|
      /_/    |__/    |_|  |_|      |___|_|_(_)
      `);
    } catch (err) {
      console.error(err);
    }
  });

program.on("--help", function () {
  console.log("\nExamples:");
  console.log(`my-cli create <project-name>`);
});
program.parse();

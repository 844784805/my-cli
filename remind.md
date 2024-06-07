# 搭建

## 初始化项目

```
//
npm init

// 新建bin/index.js文件

#! /usr/bin/env node

// packagr.json文件中添加
{
  ...
  "name": "my-cli",
  "bin": "bin/index.js"
}

// 方便测试
npm link 

//运行 my-cli
```

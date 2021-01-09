#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

GITHUB_TOKEN=21af70e4bcda3ce5cf5b0dcf28efaed86af4607d

if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:mytingbao/myBlog.git
else
  msg='来自github actions的自动部署'
  githubUrl=https://mytingbao:${GITHUB_TOKEN}@github.com/mytingbao/myBlog.git
  git config --global user.name "mytingbao"
  git config --global user.email "153515782@qq.com"
fi
git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master # 推送到github


# fobao

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 开发遇到的问题整理
  
mac显示隐藏文件：defaults write com.apple.finder AppleShowAllFiles -bool true
mac恢复隐藏命令：defaults write com.apple.finder AppleShowAllFiles -bool false

关闭严格着模式：.eslintignore中增加src/*

## 福宝客户端项目结构

# 1.政府业务 (govtservice)
 
# 2.callcenter

# 3.咨询/信息 (information)

# 4.我的 (mine)


# 导航
# 首页：#/index
# 积分兑换：#/account
# 资讯：#/information
# 我的：#/mine 

需要补充字段的选择项：

1.发证机关
2.证件类型
3.户籍区
4.户籍街道
5.户籍社区
6.居住区
7.居住街道
8.居住社区
9.居住状况
10.文化程度
11.经济来源
12.月收入
13.医保类型
14.自理情况
 
 
 学习[swagger](http://lubanapi.kabuzhu.com/ui/dist/#/yunpeng/post_api_ali_pay_alpay)

 --host 0.0.0.0搭建远程服务
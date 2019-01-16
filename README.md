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
# 积分兑换：#/account(暂时空着)
# 资讯：#/information
# 我的：#/mine 
 
 
 学习[swagger](http://lubanapi.kabuzhu.com/ui/dist/#/yunpeng/post_api_ali_pay_alpay)
https://tower.im/join?t=c8f580b7cca9df113a50878cafe31fd5
 --host 0.0.0.0搭建远程服务
 涉及到的拷贝：深浅拷贝：深拷贝loadesh()  json.parse(json.string())	；浅拷贝dessign()
 路由模式：mode:"history";  mode:"hash";  #
https://www.jb51.net/article/144341.htm
后端配置的例子：https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E5%90%8E%E7%AB%AF%E9%85%8D%E7%BD%AE%E4%BE%8B%E5%AD%90
tower： https://tower.im/join?t=c8f580b7cca9df113a50878cafe31fd5
http://192.168.0.19:10010
192.168.0.35/swagger-ui.html

去除高亮 outline: none;
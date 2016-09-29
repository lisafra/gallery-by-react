# gallery-by-react

using react.js development this project


一、使用Yeoman快速搭建项目文件

1. 本地安装Yeoman   npm install -g yo

2. 安装react-webpack生成器   npm install -g generator-react-webpack@1.2.11

3. 在github上创建一个项目，并把项目拉到本地  git clone url(项目的github地址)

4. 进入项目文件 cd + file /（文件名）

5. yo react-webpack projectName,设置相应的配置，回车，等待安装结束

6. 运行本地服务器  npm start 


二、安装React调试工具

1. 百度或chrome应用商店下载React Developer Tools

2. 地址：https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi

3. 安装插件


三、项目文件介绍

1. 目录结构： 

    src源代码所在目录  

    test测试代码所在目录 

    editorconfig用来统一不同编辑器的IDE的编码风格，前提：编辑器必需安装支持editorconfig的插件

    eslintrc,jshintre 代码风格检测工具

    yo-rc.json 用来记录当前项目的一些信息

    karma.conf.js karma测试框架的生成文件 

    package.json node项目的生成文件，申明当前项目都依赖了哪些配置包

    webpack.config.js  webpack开发环境的配置文件
 
    webpack.dist.config.js  webpack生产环境的配置文件

    Gruntfile.js 


四、项目开发

1. 兼容性处理，为css代码自动添加浏览器前缀  

    1) 进入项目文件，安装autoprefixer-loader   npm install autoprefixer-loader --save-dev

    2) npm install 安装package.json里的文件模块

    3）修改配置项 webpack.config文件中的module/test/css/sass 添加!autoprefixer-loader?{browsers:["last 2 version"]}

    4）修改文件名和文件引用，将.css改成.scss

2. 处理data

    1) 编写图片数据 src/data/imgData.json

    2) 安装并配置json-loader










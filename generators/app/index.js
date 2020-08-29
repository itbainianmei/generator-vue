// 是generator的核心入口
const generator = require('yeoman-generator')

module.exports = class extends generator{
    prompting(){
        return this.prompt([{
            name:'name',
            default:this.appname
        }]).then(answers =>{
            this.answers = answers
        })
    }
    writing(){
         // 通过模板方式导入文件到目录
        // 模板路劲
        const tmpls = [
            'src/assets/logo.png',
            'src/components/HelloWorld.vue',
            'src/router/index.js',
            'src/App.vue',
            'src/main.js',
            'static/css/common.css',
            'static/js/common.js',
            'index.html',
            'package.json',
            'package-lock.json',
            'README.md',
        ]
        tmpls.forEach(ele =>{
            this.fs.copyTpl(
                this.templatePath(ele),
                this.destinationPath(ele),
                this.answers
            )
        })
    }
}

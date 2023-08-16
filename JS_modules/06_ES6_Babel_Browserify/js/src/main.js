
//引入模块module1 module2
import {foo,bar} from "./module1"; //分别暴露
import {func1,func2} from "./module2"; //统一暴露
import module3 from "./module3"; //默认暴露

//引入第三方库 : jquery
import $  from 'jquery';

$('body').css({backgroundColor:"orange"});

foo();
bar();

func1();
func2();


module3();


/*  扩展知识:
package.json
    记录当前项目所依赖模块的版本信息，更新模块时锁定模块的大版本号（版本号的第一位）,不能锁定后面的小版本，

package-lock.json
    package-lock.json 是在 `npm install`时候生成一份文件。记录了node_modules目录下所有模块（包）的名称、版本号、下载地址、及这个模块又依赖了哪些依赖。


两者区别：

  npm5以前
       npm5以前，没有package-lock.json这个文件。package.json文件会记录你项目中所需要的所有模块。当你执行npm install的时候，node会先从package.json文件中读取所有dependencies信息，然后根据dependencies中的信息与node_modules中的模块进行对比，没有的直接下载，已有的检查更新。
       因为package.json只能锁定模块的大版本号（版本号的第一位），不能锁定后面的小版本，所以你每次重新npm install时候拉取的都是该大版本下面最新的版本。一般我们为了稳定性考虑我们不能随意升级依赖包，因为如果换包导致兼容性bug出现很难排查，这样很容易出现问题，所以package-lock.json就是来解决包锁定不升级问题的
       另外，package.json文件只记录你通过npm install方式安装的模块信息，而这些模块所依赖的其他子模块的信息不会记录。

  npm5以后
        package-lock.json文件锁定所有模块的版本号，包括主模块和所有依赖子模块。当你执行npm install的时候，node从package.json文件读取模块名称，从package-lock.json文件中获取版本号，然后进行下载或者更新。
        因此，正因为有了package-lock.json文件锁定版本号，所以当你执行npm install的时候，node不会自动更新package.json文件中的模块，必须用npm install packagename@x.x.x（指定版本号）来进行安装才会更新，package-lock.json文件中的版本号也会随着更新。


package-lock.json的作用:
        如果重新 npm install 的时候以及当node_modules文件夹并不存在或被删除时，需要用到npm install重新装载全部依赖时，通过package-lock.json可以直接表明下载地址和相关依赖，就无需再从package.json逐个分析包的依赖项，因此会大大加快安装速度，package-lock.json目的就是确保所有库包与你上次安装的完全一样。
        如果要升级package-lock.json里面的库包
        npm install XXX@x.x.x

 */
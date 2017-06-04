## dotenv

[参考链接](http://blog.leapoahead.com/2015/09/04/managing-env-constants/)

[官方链接](https://github.com/motdotla/dotenv)

``` cmd
npm install dotenv --save
```

dotenv实际上是一个文件，文件名是.env，一般被我们放在项目的根目录下。例如，下面是一个我自己的项目里面的dotenv文件

``` javascript
// 数据库配置
DB_DIALECT=postgres
DB_HOST=10.10.10.10
DB_PASSWORD=db
DB_USER=db
DB_PORT=5432
DB_NAME=webcraft
DB_CHARSET=utf8
// Node环境配置
NODE_ENV=development
```

利用dotenv，我们就可以定义针对项目的环境变量了。如果dotenv的位置是/path/to/project/.env，那么所有在/path/to/project目录下运行的文件，其能访问到的环境变量/path/to/project/.env定义的环境变量。

这样做的好处就很明显，在不同的项目目录下应用不同的环境变量，并且它们之间不会互相干扰。

## SHA1 加密

[官方链接](https://www.npmjs.com/package/sha1)

``` javascript
var sha1 = require('sha1');
sha1("message");
// This will return the string:
// "6f9b9af3cd6e8b8a73c2cdced37fe9f59226e27d"
```
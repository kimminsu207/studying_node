
1. nodejs 설치
2. vscode 설치
3. hello.js 생성

<hr>
모듈 패턴
---
내보낼때 : Module.exprts 변수
불러올때 : require 파일명

index.js (불러오는쪽)
```
const myvar = require('./myvar')
const setVar = new myvar();

console.log(setVar.name)
console.log(setVar.hello)
```

myvar.js (내보내는쪽)
```
function myvar(){
    this.name = "my instance";
    this.hello = "my instance hello"
}
module.exports = myvar;
```

node index.js 출력결과
```
my instance
my instance hello
```

>외부 모듈 검색하는곳   
https://www.npmjs.com/   
<hr>
npm
---
npm을 이용하여 남이 만든 모듈을 다운로드

npm 설정
```
npm init
```
설치법
npm install 모듈명
```
npm install express
npm install uuid4
```
<br>

>package.json내용에 dependencies를 보면 어떤 모듈을 사용하는지 알 수 있다.

package-lock.json은   
예시를 들면
-   express
    -   loadsh v3 에 최적화 되어있음
    -   body-parser

-   uuid
    -   lodash v4 에 최적화 되어 있음

그런데 lodash v4를 설치해두면 express에서 에러가 발생할 수 있음
그래서 각 모듈에 맞는 버전들을 알려주고 있는 역할을 함

<br>

<hr>

nodemon
---
웹서버 띄우기
- Chapter02. Exrpess
  - 01.express 시작 : 6:18초부터 15분까지

웹서버 실행 기본코드
```
var http = require('http');

http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.write('Hello Nodejs');
    res.end();
}).listen(3000);
```
<br>
nodemon은 

nodemno 설치방법   
커맨드 창에
```
sudo npm isntall -g nodemon
```
파일에 변화가 생기면 자동으로 적용해주는 기능인데   
윈도우에서는 잘 안되는경향이 있음



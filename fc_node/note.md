
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


자료구조
---
FIFO   
먼저 들어간 데이터가 먼저 나온다.


LIFO   
나중에 들어간 데이터가 먼저 나온다

```
// 큐 먼저 들어간게 먼저 나온다. FIFO

console.log("Queue")
const queue = []
queue.push(1)
queue.push(2)
console.log(queue)
const r = queue.shift()
console.log(r)

console.log("---------------")

// 스택 나중에 들어간게 먼저 나온다. LIFO

console.log("Stack")
const stack = []
stack.push(1)
stack.push(2)
console.log(stack)
var s = stack.pop()
console.log(s)
```
---
이벤트 루프   

http://latentflip.com/loupe   
에서 확인할꺼야.


---

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

npx   
명령어를 사용하면 해당 모듈이 없을경우 설치 한 이후에 사용   
프로젝트 규모가커지고 협업할때 매우 좋을듯
예를들면 npx nodemon index.js 명령어를 실행하면   
nodemon 모듈이 없을경우 설치 후 실행, 있을경우 그냥 실행

<hr>

exprss
---

목차
1. express 시작
2. Routing
3. View Engine - Nunjucks
4. 템플릿 상속
5. 미들웨어
6. form (body-parser)
7. 정적파일
8. Global View Varialbe
9. 404, 500 error handling
10. nunjucks macro
11. Express 권장 구조


왜 Express를 사용해야 하는가
1. 웹서비스 관점
    남들이 만들어둔걸 편하게 사용할 수 있음
    예를들면 세션관리 등등
2. 프레임워크 선정시 고려해야 될점

https://github.com/parkjunyoung/express-online



내장모듈을 사용한 웹서버 구동 
```
const http = require('http');

http.createServer( (request, response) => {  
    response.writeHead(200, {'Content-Type' : 'text/plain'});
    response.write('Hello Server');
    response.end();
}).listen(3000);
```

http 상태 코드

상태코드 설명
1       조건부응답
2       응답성공
3       리다이렉션
4       요청오류
5       서버오류

express를 이용한 웹 서버 구동
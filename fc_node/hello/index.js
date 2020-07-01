const http = require('http');
//nodejs 내장 모듈

http.createServer( (request, response) => {  
    response.writeHead(200, {'Content-Type' : 'text/plain'});
    //문서 타입을 미리 작성해둠
    response.write('Hello Server');
    response.end();
}).listen(3000);
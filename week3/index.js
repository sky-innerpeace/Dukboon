const http = require('http');
//기존에 있는 모듈은 / 안 써도 됨

// http.createServer(function (req, res)){
//
// });

http.createServer((req, res)=>{
  res.writeHead(200);//성공했다는 헤더, 상태코드를 줌
  res.write('<h1>Hello world</h1>');
  res.end();
}).listen(3000);
//보통 3000 포트로 엶.

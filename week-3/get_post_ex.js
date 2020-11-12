const http = require('http');
const url = require('url');

http.createServer((req, res) => {
    const urlObj = url.parse(req.url, true);
    //true이면 쿼리가 객체 형태로 나옴
    //false면 쿼리가 문자열 형태로 나옴
    const pathName = urlObj.pathname;
    if(pathName === '/') {
        if(urlObj.search === null) {
            res.writeHead(200, { 'Content-Type' : 'text/html'});
            res.write(`
            <html>
                <head>
                    <meta charset = "utf-8">
                    <title>GET /POST 메소드 실행</title>
                </head>
                <body>
                    <form action="/get" method="get">
                        <label for="text"> 텍스트 </label>
                        <input type="text" id="text" name="text">
                        <input type="submit" value="GET">
                    </form>
                    <form action="/post" method="post">
                        <label for="text"> 텍스트 </label>
                        <input type="text" id="text" name="text">
                        <input type="submit" value="POST">
                    </form>
                </body>
            </html>
                `);
            res.end();
        }
    } else if (pathName === '/get'){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write(`
        <html>
            <head>
                <meta charset="utf-8">
                <title>GET / POST 메소드 실행</title>
            </head>
            <body>
                <h1>GET!</h1>
                <p>URL을 확인하세요.
                name을 texxt로 지정해서
                url이 get?text= 이런 식으로 나오죠?</p>
            </body>
        </html>
        `);
        console.log(urlObj.query);
        res.end();
    } else if (pathName === '/post') {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        //https://araikuma.tistory.com/453
        //헤더 정보를 응답에 작성하여 보냄
        res.write(`
        <html>
            <head>
                <meta charset="utf-8">
                <title>GET / POST 메소드 실행</title>
            </head>
            <body>
                <h1>POST!</h1>
                <p>URL을 확인하세요.
                아무 것도 없죠?
                Network tab에 가서 Headers에 보면
                body Form Data에서 확인할 수 있습니다 !</p>
            </body>
        </html>
        `);
        console.log(urlObj.query);
        res.end();
    } else {
        res.writeHead(404);
        res.end();
    }
    
}).listen(3000);
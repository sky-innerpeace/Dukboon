const express = require('express');
const app = express();
const PORT = 3000;

app.post('*', express.urlencoded({extended: false}));
// 모든 경로의 post 요청에 대해 파싱되게 함
app.use(express.static('public'));
//css, js, 이미지 파일 등을 넣는 정적 파일 => public

app.get('/', (req, res)=>{
    res.send('Hello World!');
});

app.listen(PORT,() => console.log('node on 3000'));
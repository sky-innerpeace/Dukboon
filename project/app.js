const express = require('express');
const app = express();
const PORT = 3000;

<<<<<<< HEAD
app.post('*', express.urlencoded({extended: false}));
// 모든 경로의 post 요청에 대해 파싱되게 함
app.use(express.static('public'));
//css, js, 이미지 파일 등을 넣는 정적 파일 => public

app.get('/', (req, res)=>{
    res.send('Hello World!');
});

app.listen(PORT,() => console.log('node on 3000'));
=======
app.post('*', express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => console.log('node on 3000'));
>>>>>>> b2ad750ca51dce794e69433a4a099cb4fc4f3b73

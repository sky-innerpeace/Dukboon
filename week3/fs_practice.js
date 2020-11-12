const fs = require('fs');

fs.readFile('./data/Friends.txt', 'utf8', function(err,data){
  if (err) throw err;
  console.log(data);
});

fs.readdir('./data', (err, files)=>{
  if (err) throw err;
  console.log(files);

  //for문으로 출력하는 거랑 같음.
  //files.forEach(e => console.log(e));
})
//readdir 이 먼저 작동하고
//readFile 이 나중에 됐다.
//비동기 동작의 특징임
//readFile이 다 될 때까지 readdir을 기다리는 것이 아니라
//readFile을 걸어두고 readdir을 실행함


//dummy.txt 파일 만들기
// fs.writeFile('./data/dummy.txt', 'Hello world!', 'utf8', () =>{
//   console.log('done');
// });
// //dummy.txt 파일에 내용 쓰기
// fs.appendFile('./data/dummy.txt', '\ndummy', 'utf8', () =>{
//   console.log('append done');
// })

//위에 writeFile, appendFile이 비동기 처리 때문에 늦게 처리되므로 주석처리함
fs.unlink('./data/dummy.txt', () =>{
  console.log('delete');
})

const fs = require('fs');
const zlib = require('zlib');   // nodejs 압축 모듈

const readStream = fs.createReadStream('./12-stream/file.txt');
const zlibStream = zlib.createGzip()
const writeStream = fs.createWriteStream('./12-stream/file4.zip');
// readStream에서 읽어온 데이터를 pipe로 zlibStream으로 압축시켜 writeStream에 연결
const piping  = readStream.pipe(zlibStream).pipe(writeStream);
piping.on('finish', () =>{
    console.log('done!!');
});

const http = require('http');

const server = http.createServer((req,res) => {
    const stream = fs.createReadStream('./12-stream/file.txt');
    stream.pipe(res);   // 읽어들인 file.txt를 http 서버에 res를 통해 업로드
});

server.listen(3000);
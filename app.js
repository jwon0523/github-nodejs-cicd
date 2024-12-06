const express = require('express');
const app = express();
const http = require('http').Server(app);

const port = process.env.PORT || 3000;

// 루트(/) 경로로 들어오는 HTTP GET 요청을 처리한다. 보라색으로 표현된 코드가 핸들러 
app.get('/', (req, res) => {
  // 쇼핑몰 홈페이지 내용을 변경
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>New 쇼핑몰 홈</title>
    </head>
    <body>
      <h1>Welcome to the New Shopping Mall</h1>
      <ul>
        <li>Item X - $12</li>
        <li>Item Y - $22</li>
        <li>Item Z - $32</li>
      </ul>
    </body>
    </html>
  `);
});

http.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

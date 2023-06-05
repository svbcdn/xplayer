var http = require("http");
const path = require("path");
const fs = require("fs");

http
   .createServer(function (request, response) {
      let p = request.url;
      p = p.replace(/\?.*$/, "");
      if (p == "/") p = "index.html";
      console.info("url", p);
      response.writeHead(200);
      let rs = fs.createReadStream(path.join(__dirname, "dist", p));
      rs.on("error", (err) => {
         response.writeHead(404);
      });
      response.writeHead(200);
      rs.pipe(response);
      // 发送响应数据 "Hello World"
      //response.end('Hello World\n');
   })
   .listen(9000);

// 终端打印如下信息
console.log("Server running at http://127.0.0.1:9000/");

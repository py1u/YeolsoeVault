import http from ("http");
import fs from ("fs");
import url from ("url");

var messages = [&quot;testing&quot;];
var clients = [];

http.createServer(function (req, res) {
  res.end("Hello world");
}).listen(8080, 'localhost');
console.log('Server running.');
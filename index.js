console.log("HI!!");
// require는 node module을 어딘가에서 가져오는 것.
// 이경우에는 express라는 파일을 내 파일들 속에서 찾으려고 할꺼야
// 만약 못찾으면 node_modules파일에서 찾으려고함
const express = require("express");
const app = express();

app.listen(4000);

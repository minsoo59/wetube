import express from "express";
// Midelewares framework
//-> morgan(로그), Helmet(기초보안담당), cookieParser(able to deal with쿠키),
//bodyParser(form데이터를 서버로 받아와서 활용가능)
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
// require는 node module을 어딘가에서 가져오는 것.
// 이경우에는 express라는 파일을 내 파일들 속에서 찾으려고 할꺼야
// 만약 못찾으면 node_modules파일에서 찾으려고함

const app = express();
const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);
// 예를 들어 우리가 정보를 얻고자 하면,
// 누가 페이지를 요청했는지나, 어떤 종류의 데이터가 페이지로 전송됐는지
// req(request object) -> ex)post방식 아이디, 패스워드 전송
// res(respose object) ->
const handleHome = (req, res) => res.send("Hello from home!");
// console.log("Hi from home!");
// 지금 로그는 떴는데 계속 로딩중 그 이유는...get reuqest 말야 그에 대한 응답이 있어야해.
// 뭔가를 응답하게 만들어야함.
// 내가 만든 서버로 응답하거나, 에러를 응답하거나 ok를 응답하거나 http 메세지, hello라거나
// 뭐가 됐든 응답해야함.
// 일반적으로 서버가 하는건
// 예를들어 사이트에서 새로고침을 해보면
// 서버가 하는 일은 html로 응답하는 거.

// 여기에 단순히 send가 아니라 완전한 html, css파일을 send해줘야함.
// 이게 기본적으로 작동하는 방식!
// 이건 화살표 함수라고함
const handleProfile = (req, res) => res.send("You are on my profile");

//Midelewares function
// const betweenHome = (req, res, next) => {
//   console.log("I'm between");
//   // 주의 : next()가 꼭 필요하다 !! 안그럼 다음에 실행할 콜백함수가 실행하지 못할거야!!
//   next();
// };
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

const middleware = (req, res, next) => {
  // middleware로 send함수를 쓴다면 연결을 끊을수있음
  res.send("not happened");
};

// express가 하는일이 응답하는 것.
// 1. 서버를 생성하고
// 2. route를 생성하고
// 3. 그리고 그것에 응답하는 방식
// 정말 간단함. express와 nodeJS로 할수있음 python으로 하면 좀더 걸리고

// app.use(betweenHome);
app.get("/", middleware, handleHome);
app.get("/profile", handleProfile);
app.listen(PORT, handleListening);

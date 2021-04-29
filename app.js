import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
// 이건 단순히 URL을 분리한것일 뿐 not controller
import { localMiddlewate } from "./middlewares";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
const app = express();

app.use(helmet());
app.set("view engine", "pug");
app.use("/uploads", express.static("uploads"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(localMiddlewate);
// app.get은 오직 get method사용, app.use는 use middleware for GET, POST, PUT etc, for all methods.
// use의 정확한 의미는 누군가 /user경로에 접속하면 이 router전체를 사용하겠다는 의미임.
app.use(function (req, res, next) {
  res.setHeader(
    "Content-Security-Policy",
    "script-src 'self' https://archive.org"
  );
  return next();
});
app.use(routes.home, globalRouter); // join login search about page home...
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

// 누군가 내 파일을 불러올떄(import) app object를 주겠다는 의미
export default app;

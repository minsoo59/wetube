import routes from "./routes";

// locals가 추가되면 그것들을 템플릿, 컨트롤러, 어디에서든 쓸수 있음!!
export const localMiddlewate = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  next();
};

import multer from "multer";
import routes from "./routes";

const multerVideo = multer({ dest: "uploads/video/" });

// locals가 추가되면 그것들을 템플릿, 컨트롤러, 어디에서든 쓸수 있음!!
export const localMiddlewate = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 1,
  };
  next();
};

export const uploadVideo = multerVideo.single("videoFile");

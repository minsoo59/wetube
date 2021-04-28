import express from "express";
import {
  deleteVideo,
  editVideo,
  upload,
  videosDetail,
} from "../controllers/videoController";
import routes from "../routes";

const videoRouter = express.Router();

videoRouter.get(routes.upload, upload);
videoRouter.get(routes.videosDetail, videosDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

// default는 오직 coust 변수만 export한다는것
export default videoRouter;

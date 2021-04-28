import express from "express";
import {
  changePassword,
  editProfile,
  userDetail,
  users,
} from "../controllers/userController";

import routes from "../routes";

const userRouter = express.Router();
// 라우트를 카테고리별로 쪼개서 묶을 수 있음.
// 그럼 주소가 /user/~~~ /video/ ~~~ 이런식으로 나뉠 수 있음.
// 함수 만드는 방법(handleHome)이랑 익명함수만드는것 두가지방법이 있음.

// userRouter.get(routes.users, users);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail, userDetail);

export default userRouter;

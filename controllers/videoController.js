import { videos } from "../db";
import routes from "../routes";
// pug쓸려면 send 대신 render그리고 함수의 인자로 안에는 템플릿 파일명을 입력하면됨
export const home = (req, res) => {
  res.render("home", { pageTitle: "Home", videos });
};

export const search = (req, res) => {
  // const searchingBy = req.query.term; //ES6이전 코딩 방식
  const {
    query: { term: searchingBy },
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy, videos });
};

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });
export const postUpload = (req, res) => {
  const {
    body: { file, title, description },
  } = req;
  // To Do: Upload and save video
  res.redirect(routes.videoDetail(123456));
};

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });
export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });

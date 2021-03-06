import routes from "../routes";
import User from "../models/User";

// join
export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};
export const postJoin = async (req, res) => {
  // console.log(req.body);
  const {
    body: { name, email, password, password2 },
  } = req;
  if (password != password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    try {
      const user = await User({
        name,
        email,
      });
      await User.regiseter(user, password);
    } catch (error) {
      console.log(error);
    }
    res.redirect(routes.home);
  }
};
// login
export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Login" });
export const postLogin = (req, res) => res.redirect(routes.home);
// logout
export const logout = (req, res) => {
  // To Do : Process Log Out
  res.redirect(routes.home);
};

export const users = (req, res) => res.render("users", { pageTitle: "Users" });
export const userDetail = (req, res) =>
  res.render("userDetail", { pageTitle: "User Detail" });
export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "Change Password" });
export const videos = (req, res) =>
  res.render("videos", { pageTitle: "Videos" });

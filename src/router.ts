import express from "express";
import * as userControllers from "./controllers/userControllers";
import * as postItControllers from "./controllers/postItControllers";

const router = express.Router();

router.post(`/newUser`, userControllers.add);
router.get(`/user/:login`, userControllers.login);
router.get(`/allUsers`, userControllers.all);
router.get(`/users/:userId`, userControllers.one);

router.post(`/newPostIt`, postItControllers.add);
router.delete(`/deletePostIt/:id`, postItControllers.trash);
router.get(`/users/:userId/postIt`, postItControllers.view);

export default router;

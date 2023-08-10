import express from "express";
import * as userControllers from "./controllers/userControllers";
import * as postItControllers from "./controllers/postItControllers";

const router = express.Router();

router.post(`/newUser`, userControllers.add);
router.get(`/user/:id`, userControllers.login);

router.post(`/newPostIt`, postItControllers.add);
router.delete(`/deletePostIt/:id`, postItControllers.trash);
router.get(`/user/:id/postIt`, postItControllers.view);

export default router;

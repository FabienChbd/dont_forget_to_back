import express from "express";
const cors = require("cors");
const app = express();
import * as userControllers from "./controllers/userControllers";
import * as postItControllers from "./controllers/postItControllers";

const router = express.Router();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

router.post(`/newUser`, userControllers.add);
router.get(`/user/:id`, userControllers.login);
router.get(`/allUsers`, userControllers.all);

router.post(`/newPostIt`, postItControllers.add);
router.delete(`/deletePostIt/:id`, postItControllers.trash);
router.get(`/user/:id/postIt`, postItControllers.view);

export default router;

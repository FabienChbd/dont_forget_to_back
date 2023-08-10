import express from "express";
const cors = require("cors");
const app = express();
import * as userControllers from "./controllers/userControllers";
import * as postItControllers from "./controllers/postItControllers";

const router = express.Router();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    optionsSuccessStatus: 204,
  })
);

router.post(`/newUser`, userControllers.add);
router.get(`/user`, userControllers.login);

router.post(`/newPostIt`, postItControllers.add);
router.delete(`/deletePostIt/:id`, postItControllers.trash);
router.get(`/user/:id/postIt`, postItControllers.view);

export default router;

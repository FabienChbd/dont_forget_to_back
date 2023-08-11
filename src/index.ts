import express from "express";
import router from "./router";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
  })
);

app.use(express.json());
app.use(router);

const server = app.listen(3000, () => console.log("🚀 Server ready"));

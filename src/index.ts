import express from "express";
import router from "./router";

const app = express();

app.use(express.json());
app.use(router);

const server = app.listen(3000, () => console.log("🚀 Server ready"));

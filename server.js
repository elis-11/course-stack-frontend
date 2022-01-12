import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

 import  * as ArticelsController from "./controllers/articelsController.js"

import cors from "cors"
dotenv.config();

mongoose.connect(process.env.MONGOURI);
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors({
  origin: process.env.ORIGIN_URL || "http://localhost:3000",
  credentials: true, // accept incoming cookies
}))

app.get("/men", async (req, res) => {
  const articels = await ArticelsController.getMenArticels();
  res.json(articels);
});

app.get("/women", async (req, res) => {
  const articels = await ArticelsController.getWomenArticels();
  res.json(articels);
});

app.get("/children", async (req, res) => {
  const articels = await ArticelsController.getChildernArticels();
  res.json(articels);
});

app.listen(PORT, () => {
  console.log(`app listing on port http://localhost:${PORT}`);
});

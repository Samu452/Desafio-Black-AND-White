import express from "express";
import path from "path";
import Jimp from "jimp";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

const __dirname = import.meta.dirname;

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"));
});

router.get("/procesar", async (req, res) => {
  const imageName =`${uuidv4().slice(0, 6)}.jpg`;  
  const { imageUrl } = req.query;
  const imgJimp = await Jimp.read(imageUrl);
  await imgJimp
    .resize(350, Jimp.AUTO)
    .grayscale()
    .writeAsync(`assets/img/${imageName}`);

  res.sendFile(path.join(__dirname, `../assets/img/${imageName}`,));
});


export default router;

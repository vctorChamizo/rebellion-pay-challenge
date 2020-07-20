import { Router } from "express";
import cloudinary from "cloudinary";

const router = Router();

router.get("/statistics", async (req, res, next) => {
  try {
    const searchCloud = cloudinary.v2.search;
    const response = searchCloud.execute();
    res.status(200).json("statistics");
  } catch (error) {
    next(error);
  }
});

router.get("/csv", (req, res, next) => {
  try {
    res.status(200).json("csv");
  } catch (error) {
    next(error);
  }
});

export const CloudinaryAccount = { router: router, path: "cloudinary" };
